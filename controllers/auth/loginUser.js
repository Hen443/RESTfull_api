const User = require('../../schema/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    try {
        req.body.email = req.body.email.toLowerCase()
        let userData = await User.findOne({ email: req.body.email })
        if (!userData) {
            res.status(401).send({ success: 'false', error: { code: 401, message: 'Unauthorized. Some wrong credentials' } })
            return
        }
        const passdecode = bcrypt.compareSync(req.body.pass, userData.pass);
        if (!passdecode) {
            res.status(401).send({ success: 'false', error: { code: 401, message: 'Unauthorized. Some wrong credentials' } })
            return
        }
        const token = jwt.sign(userData, process.env.jwtKey, { algorithm: 'HS384' })
        res.status(200).send({ success: 'true', payload: token })
    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
        return
    }


}


module.exports = loginUser