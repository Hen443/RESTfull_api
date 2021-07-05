const mongoose = require('mongoose');
const Schema = require('mongoose').Schema

const userSchema = new Schema({
    fullName: {
        type:String,
        minlength:4,
        required: true
    },
    email: {
        type:String,
        unique: true,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    pass: {
        type:String,
        minlength:5,
        maxlength:60,
        required: true
    },
    admin:{
        type:Boolean,
        default:false,
        required:false
    }

})

const User = mongoose.model('User', userSchema)

module.exports = User