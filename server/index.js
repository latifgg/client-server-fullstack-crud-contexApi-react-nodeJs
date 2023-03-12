import express from "express"
import PostRouter from "./controller/PostsRouter.js"
import UserRouter from "./controller/UsersRouter.js"
import cors from "cors"

const app= express();
const port = 8888;

app.use(cors());
app.use(express.json());

app.use("/posts", PostRouter)
app.use("/users", UserRouter)

app.listen(port,()=>{
    console.log(`app is up and running port:${port}`)
})


