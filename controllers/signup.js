const express = require("express")
const router = express.Router()
const User = require("./../models/user")

router.get("/signup", (req, res) => {
    const data = {
        title: "Login and Signup"
    }
    res.render("login-signup", { data })
})

router.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body)
        const saveduser = await user.save()
        console.log(saveduser)
        req.session.email = saveduser.email
        req.session.name = saveduser.name
        res.redirect("/attemptest")
    } catch (err) {
        console.log(err)
        res.redirect("/signup")
    }
})

module.exports = router