const Router = require('express').Router();

const getUsers = require('../controllers/auth/getUsers')
const getUserById = require('../controllers/auth/getUserById')
const registerUser = require('../controllers/auth/registerUser')
const loginUser = require('../controllers/auth/loginUser')

const authToken = require('../middleware/authToken')
const userToken = require('../middleware/userToken')
const adminCheck = require('../middleware/adminCheck')

Router.route('/')
    .get(userToken, adminCheck, getUsers)

Router.route('/:id')
    .get(userToken, getUserById)

Router.route('/register')
    .post(authToken, registerUser)


Router.route('/login')
    .post(authToken, loginUser)

module.exports = Router