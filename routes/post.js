const Router = require('express').Router();

const getPosts = require('../controllers/post/getPosts')
const addPost = require('../controllers/post/addPost')
const deleteAllPosts = require('../controllers/post/deleteAllPosts')
const getPostById = require('../controllers/post/getPostById')
const updatePost = require('../controllers/post/updatePost')
const deletePostById = require('../controllers/post/deletePostById')

const userToken = require('../middleware/userToken')
const adminCheck = require('../middleware/adminCheck');
const ownerCheck = require('../middleware/ownerCheck');


Router.route('/')
    .get(userToken, getPosts)
    .post(userToken, addPost)
    .delete(userToken, adminCheck, deleteAllPosts)

Router.route('/:id')
    .get(userToken, getPostById)
    .put(userToken, ownerCheck, updatePost)
    .delete(userToken, ownerCheck, deletePostById)

module.exports = Router