const jwt = require('jsonwebtoken');

const userToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ success: 'false', error: { code: 401, message: 'Unauthorized. Please Log in' } })

        return
    }
    try {
        const check = jwt.verify(token,process.env.jwtKey)
        req.user = check._id
        next()
    } catch (error) {
        res.status(401).send({ success: 'false', error: { code: 401, message: 'Unauthorized. Some wrong credentials' } })
        console.log(error)
    }
}
module.exports = userToken