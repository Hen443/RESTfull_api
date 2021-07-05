const Post = require('../schema/post')

const ownerCheck = async(req,res,next) => {
    try {
        const dbPost = await Post.findOne({_id:req.params.id})
        if(req.user == dbPost.userId){
            next()
            return
        }
        res.status(400).send({ success: 'false', error: { code: 400, message: 'You are not owner' } })
        return
    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
    }
    

}

module.exports = ownerCheck