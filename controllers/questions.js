const express = require("express")
const session = require('express-session')
const router = express.Router()
const Question = require("./../models/question")

router.use(session({
    secret: "djhvduviduvbsdbsdiuvbuydsvsaubishiudgfyudfvyudhvc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}))

const checkLogin = (req, res, next) => {
    if (req.session.email == 'admin@gmail.com' && req.session.name == 'Admin') {
        next()
    } else {
        res.redirect('/login')
    }
}

router.get("/questions", checkLogin, async (req, res) => {
    try {
        const questions = await Question.find()
        const data = {
            title: "All Questions",
            questions,
            name: req.session.name
        }
        // console.log(questions)
        res.render("questions", { data })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router