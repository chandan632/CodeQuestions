const express = require("express")
const session = require("express-session")
const router = express.Router()
const Answer = require("./../models/answer")

router.use(session({
    secret: "djhvduviduvbsdbsdiuvbuydsvsaubishiudgfyudfvyudhvc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}))

router.post("/userans/:id", async (req, res) => {
    try {
        // console.log(req.params.id)
        // console.log(req.body)
        const ans = {
            name: req.session.name,
            email: req.session.email,
            oldid: req.params.id,
            answer: req.body.userans
        }
        const userAns = new Answer(ans)
        const savedAns = await userAns.save()
        // console.log(savedAns)
        res.send("Ans Saved")
    } catch (err) {
        console.log(err)
    }
})

module.exports = router