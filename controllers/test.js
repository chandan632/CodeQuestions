const express = require("express")
const router = express.Router()
const session = require("express-session")
const Question = require("./../models/question")

router.use(session({
    secret: "djhvduviduvbsdbsdiuvbuydsvsaubishiudgfyudfvyudhvc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}))

function checklogin(req, res, next) {
    if (req.session.email != undefined) {
        next()
    } else {
        res.redirect("/login")
    }
}

router.get("/test", async (req, res) => {
    const questions = await Question.find()
    const data = {
        title: "Test",
        questions
    }
    res.render("test", { data })
})

router.get("/attemptest", checklogin, async (req, res) => {
    const questions = await Question.find()
    const data = {
        title: "Test",
        questions,
        name: req.session.name
    }
    res.render("test", { data })
})

module.exports = router