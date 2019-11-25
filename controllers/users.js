const express = require('express')
const session = require('express-session')
const router = express.Router()
const User = require('./../models/user')

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

router.get('/users', checkLogin, async (req, res) => {
    try {
        const users = await User.find()
        const data = {
            title: 'Users',
            users,
            name: req.session.name
        }
        res.render('users', { data })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router