import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import ProjectDetails from "./pages/ProjectDetail";
import Education from "./components/Education";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skill />
              <Education />
              <Project />
              <Contact />
              
            </>
          }
        />

        {}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;