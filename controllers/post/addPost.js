const Post = require('../../schema/post')
const postSchema = require('../../JoiSchema/postSchema')

const addPost = async (req, res) => {
    try {
        await postSchema.validateAsync(req.body);
    } catch (error) {
        res.status(400).send({ success: 'false', error: { code: 400, message: error.details[0].message } })
        return
    }

    try {
        req.body.userId = req.user
        const post = new Post(req.body)
        await post.save()
        res.status(200).send({ success: 'true', payload: post })
    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
        return
    }

}

module.exports = addPost