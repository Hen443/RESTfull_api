const User = require('../../schema/user')
const bcrypt = require('bcryptjs')
const userSchema = require('../../JoiSchema/userSchema')

const registerUser = async (req, res) => {
    try {
        await userSchema.validateAsync(req.body);
    } catch (error) {
        res.status(400).send({ success: 'false', error: { code: 400, message: error.details[0].message } })
        return
    }
    req.body.email = req.body.email.toLowerCase()
    try {
        const isRegistered = await User.findOne({ email: req.body.email })
        if (isRegistered) {
            res.status(403).send({ success: 'false', error: { code: 403, message: 'User already taken.' } })
            return
        }
        let salt = bcrypt.genSaltSync(10);
        req.body.pass = bcrypt.hashSync(req.body.pass, salt);
        let newUser = new User(req.body)
        await newUser.save()
        res.status(200).send({ success: 'true', payload: newUser._id })
    }
    catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
        return
    }

}

module.exports = registerUser