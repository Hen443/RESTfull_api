const Post = require('../../schema/post')
const postSchema = require('../../JoiSchema/postSchema')

const updatePost = async (req, res) => {
    try {

        await postSchema.validateAsync(req.body);

        let updated = await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            price: req.body.price
        }, { new: true })

        res.status(200).send({ success: 'true', payload: updated })
        console.log(updated)


    }
    catch(error){
        res.send({message:'error stex'})
        console.log(error)
    }
    
}

module.exports = updatePost