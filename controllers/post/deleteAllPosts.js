const Post = require('../../schema/post')

const deleteAllPosts = async (req, res) => {
    try {
        const deleted = await Post.deleteMany({})
        res.status(200).send({ success: 'true', payload: deleted })

    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
        return
    }

}

module.exports = deleteAllPosts