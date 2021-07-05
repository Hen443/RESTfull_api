const Post = require('../../schema/post')

const getPosts = async (req, res) => {
    try {
        const post = await Post.find({})
        res.status(200).send({ success: 'true', payload: post })
    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
        return
    }


}

module.exports = getPosts