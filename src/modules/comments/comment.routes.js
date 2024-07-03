import express from 'express'
import * as commentController from './comment.controller.js'

const commentRouter = express.Router()

commentRouter.post('/addComment', commentController.addComment)
commentRouter.get('/getComments', commentController.getComments)
commentRouter.get('/userWithPostsAndComments', commentController.userWithPostsAndComments)
commentRouter.put('/updateComment', commentController.updateComment)
commentRouter.delete('/deleteComment', commentController.deleteComment)

export default commentRouter