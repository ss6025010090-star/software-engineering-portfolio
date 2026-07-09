require("dotenv").config();

console.log("Mongo URI:", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const messageRoutes = require("./routes/messageRoutes");
const projectRoutes = require("./routes/projectRoutes"); 


const app = express();


app.use(cors());

app.use(express.json());




app.use("/api/messages", messageRoutes);

app.use("/api/projects", projectRoutes); 


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => {
    console.log(err);
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});