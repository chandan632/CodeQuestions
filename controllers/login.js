const express = require("express")
const session = require("express-session")
const router = express.Router()
const User = require("./../models/user")

router.use(session({
    secret: "djhvduviduvbsdbsdiuvbuydsvsaubishiudgfyudfvyudhvc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}))

const checkLogin = (req, res, next) => {
    if (req.session.email == undefined) {
        next()
    } else if (req.session.email == 'admin@gmail.com' && req.session.name == 'Admin') {
        res.redirect('/')
    } else if (req.session.email != 'admin@gmail.com' && req.session.email != undefined) {
        res.redirect('/test')
    }
}

router.get("/login", checkLogin, (req, res) => {
    const data = {
        title: "Login and Signup"
    }
    res.render("login-signup", { data })
})

router.post("/login", async (req, res) => {
    try {
        const email = req.body.login_email
        const password = req.body.login_password
        if (email == "admin@gmail.com" && password == "admin@123") {
            req.session.email = "admin@gmail.com"
            req.session.name = "Admin"
            res.redirect("/")
        } else {
            const user = await User.findOne({ email, password })
            if (!user) {
                res.redirect("/login")
            } else {
                req.session.email = email
                req.session.name = user.name
                res.redirect("/attemptest")
            }
        }
    } catch (err) {
        console.log(err)
        res.redirect("/login")
    }
})

module.exports = router