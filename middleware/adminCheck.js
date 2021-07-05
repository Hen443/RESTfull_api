const User = require('../schema/user')

const adminCheck = async (req, res, next) => {
    try {
        const admin = await User.findOne({ _id: req.user })
        if (admin.admin) {
            next()
            return
        }
        res.status(403).send({ success: 'false', error: { code: 403, message: 'You are not admin' } })
        return
    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
    }

}


module.exports = adminCheck