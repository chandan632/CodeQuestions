const express = require("express")
const router = express.Router()
const Question = require("./../models/question")

router.get("/questions", async (req, res) => {
    try {
        const questions = await Question.find()
        const data = {
            title: "All Questions",
            questions
        }
        console.log(questions)
        res.render("questions", { data })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router