const express = require("express")
const router = express.Router()
const Question = require("../models/question")

router.post("/addquestions", async (req, res) => {
    try {
        const question = new Question(req.body)
        await question.save()
        if (!question) {
            throw new Error("Some Error")
        } else {
            console.log(question)
            res.send("Question Added")
        }
    } catch (err) {
        res.send("Something Went Wrong")
    }
})

module.exports = router