const mongoose = require("mongoose")
const validator = require("validator")

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email isn't valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 20
    },
    testDone: {
        type: String,
        default: 'no',
        trim: true,
        lowercase: true
    },
    score: {
        type: Number,
        default: 0,
        trim: true
    }
})

const User = mongoose.model("User", schema)

module.exports = User