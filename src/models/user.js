const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: [true, 'email already exist'],
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Email is not valid')
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: [7, 'pass length should be greater than 6'],
        validate(value){
            if(value.toLowerCase().includes('password'))
                throw new Error('password is not safe')
        }
    }
})
const User = mongoose.model('User', userSchema)

module.exports = User