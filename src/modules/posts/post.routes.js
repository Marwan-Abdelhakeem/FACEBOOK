import express from 'express'
import * as postController from './post.controller.js'

const postRouter = express.Router()

postRouter.post('/addPost', postController.addPost)
postRouter.get('/getPosts', postController.getPosts)
postRouter.put('/updatePosts', postController.updatePosts)
postRouter.delete('/deletePost',postController.deletePost)
postRouter.get('/getSpecificPost',postController.getSpecificPost)
postRouter.get('/getSpecificPost1',postController.getSpecificPost1)
export default postRouter