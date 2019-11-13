const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const addQuestion = require("./controllers/addquestions")
const questions = require("./controllers/questions")
const test = require("./controllers/test")
const signup = require("./controllers/signup")
const login = require("./controllers/login")

const app = express()

const port = process.env.PORT || 4000

mongoose.connect("mongodb://127.0.0.1:27017/CodeQuestion", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})

app.use(session({
    secret: "djhvduviduvbsdbsdiuvbuydsvsaubishiudgfyudfvyudhvc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}))

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

app.use(addQuestion)
app.use(questions)
app.use(test)
app.use(signup)
app.use(login)

app.get("/", (req, res) => {
    const data = {
        title: "Home Page"
    }
    res.render("index", { data })
})

app.listen(port, () => {
    console.log(`server up on http://127.0.0.1:${port}`)
})