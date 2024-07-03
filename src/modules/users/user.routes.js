import express from 'express'
import { logout, signin, signup } from './user.controller.js'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.patch('/logOut', logout)
export default userRouter