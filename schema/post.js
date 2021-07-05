const mongoose = require('mongoose');
const Schema = require('mongoose').Schema

const postSchema = new Schema({
    title: String,
    price: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post