const express = require("express")
const router = express.Router()
const Question = require("../models/question")

const checkLogin = (req, res, next) => {
    if (req.session.email == 'admin@gmail.com' && req.session.name == 'Admin') {
        next()
    } else {
        res.redirect('/login')
    }
}

router.post("/addquestions", checkLogin, async (req, res) => {
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