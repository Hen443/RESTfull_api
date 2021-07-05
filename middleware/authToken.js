const authToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (token) {
        res.status(400).send({ success: 'false', error: { code: 401, message: 'You are registered' } })
        return
    }
    next()
}
module.exports = authToken