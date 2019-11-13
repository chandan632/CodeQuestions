const mongoose = require("mongoose")

const schema = mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    option1: {
        type: String,
        required: true,
        trim: true
    },
    option2: {
        type: String,
        required: true,
        trim: true
    },
    option3: {
        type: String,
        required: true,
        trim: true
    },
    option4: {
        type: String,
        required: true,
        trim: true
    },
    ans: {
        type: String,
        required: true,
        trim: true
    }
})

const Question = mongoose.model("Question", schema)

module.exports = Question