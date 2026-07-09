require("dotenv").config();

console.log("Mongo URI:", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const messageRoutes = require("./routes/messageRoutes");

const app = express();


app.use(cors());

app.use(express.json());


// Routes

app.use("/api/messages", messageRoutes);


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