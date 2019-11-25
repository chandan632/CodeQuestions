const express = require('express')
const session = require('express-session')
const router = express.Router()
const User = require('./../models/user')
const Answer = require('./../models/answer')
const Question = require('./../models/question')

router.use(session({
    secret: "djhvduviduvbsdbsdiuvbuydsvsaubishiudgfyudfvyudhvc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}))

router.get('/testdone', async (req, res) => {
    try {
        let marks = 0
        const email = req.session.email
        const answers = await Answer.find({ email })
        let data = {}
        // answers.forEach(async answer => {
        for (let i = 0; i < answers.length; i++) {
            let answer = answers[i]
            const ques = await Question.findOne({ _id: answer.oldid })
            const option = ques.ans;
            console.log(option)
            console.log(answer.answer)
            console.log(ques[option])
            if (answer.answer == ques[option]) {
                marks++;
            }
            data = {
                title: 'Test on CodeQuestions',
                name: req.session.name,
                marks
            }
            // console.log(data)
        }
        console.log(data)
        // })
        const user = await User.findOneAndUpdate({ email: req.session.email },
            {
                $set: {
                    testDone: 'yes',
                    score: data.marks
                }
            }, { new: true }
        )
        res.render("marks", { data })
    } catch (err) {
        console.log(err)
    }
})


module.exports = router