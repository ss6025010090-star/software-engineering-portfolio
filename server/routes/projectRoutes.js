const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET ALL PROJECTS (from MongoDB)
router.get("/", async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});



router.get("/:id", async (req, res) => {
  try {
      const project = await Project.findById(req.params.id);

      if (!project) {
          return res.status(404).json({ message: "Project not found" });
      }

      res.json(project);

  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

  // CREATE NEW PROJECT (CREATE)
router.post("/", async (req, res) => {
    try {
      const project = new Project(req.body);
      const savedProject = await project.save();
      res.status(201).json(savedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

  // UPDATE project
router.put("/:id", async (req, res) => {
    try {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      res.json(updatedProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

  // DELETE project
router.delete("/:id", async (req, res) => {
    try {
      const deletedProject = await Project.findByIdAndDelete(req.params.id);
  
      if (!deletedProject) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      res.json({ message: "Project deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});



module.exports = router;