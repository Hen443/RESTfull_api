const Post = require('../../schema/post')

const getPostById = async (req, res) => {
    if (req.params.id) {
        try {
            const post = await Post.findById(req.params.id).select(['-_id', '-__v'])
            if (!post) {
                res.status(404).send({ success: 'false', error: { code: 404, message: 'Post Not Found' } })
                return
            }
            res.status(200).send({ success: 'true', payload: post })
        } catch (error) {
            res.status(500).send({error: { code: 500, message: 'Server error' }})
            console.log(error)
            return
        }

    }
    res.status(400).send({success:'false',error:{ code:400, message: 'Bad Request \'id\' is required' }})
    return

}

module.exports = getPostById