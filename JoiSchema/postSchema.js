const Joi = require('joi');

const postSchema = Joi.object({
    title:Joi.string().min(5).required(),
    price:Joi.number().min(1).positive().required()
})

module.exports = postSchema