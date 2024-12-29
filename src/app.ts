import express from "express";
const app = express();
import dotenv  from "dotenv"
import  bodyParser from "body-parser"
import  mongoose from "mongoose"
import  usersRouter  from "./routes/usersRouter"
import postsRouter from "./routes/postsRouter"
import commentRouter from "./routes/commentRouter"
dotenv.config();


const port = process.env.PORT

try{
mongoose.connect(process.env.DB_URI)
}catch(e){
    console.log(e)
}
const db = mongoose.connection
db.on("error",(err)=>{
console.log(err)
})
db.once("open",()=>{
    console.log("Connected to the DB")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use("/post", postsRouter)
app.use("/user", usersRouter)
app.use("/comment",commentRouter)

app.listen(port, ()=>{
    console.log(`The App is running at localhost:${port}`)
})
