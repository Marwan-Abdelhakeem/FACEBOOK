import express from 'express'
import userRouter from './src/modules/users/user.routes.js';
import dbConnection from './DB/connection.js';
import postRouter from './src/modules/posts/post.routes.js';
import commentRouter from './src/modules/comments/comment.routes.js';



const app = express()
const port = 8080
app.use(express.json());

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)



dbConnection();
app.get("/", (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 