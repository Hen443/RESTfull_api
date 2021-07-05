const User = require('../../schema/user')

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select(['fullName','-_id'])
        res.status(200).send({ success: 'true', payload: user })
    } catch (error) {
        res.status(500).send({error: { code: 500, message: 'Server error' }})
        console.log(error)
        return
    }

}

module.exports = getUserById