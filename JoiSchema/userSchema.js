const Joi = require('joi');

const userSchema = Joi.object({
    fullName:Joi.string().min(6).required(),
    email:Joi.string().email().required(),
    pass:Joi.string().alphanum().min(8).max(32).required()
})

module.exports = userSchema