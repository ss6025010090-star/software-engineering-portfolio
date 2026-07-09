const express = require("express");
const router = express.Router();

const Message = require("../models/Message");


router.post("/", async (req, res) => {

    try {

        const message = new Message(req.body);

        const savedMessage = await message.save();

        res.status(201).json(savedMessage);


    } catch(error) {

        console.log(error);

        res.status(400).json({
            message:error.message
        });

    }

});


module.exports = router;