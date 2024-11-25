const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const usersRouter = require("./routes/usersRouter.js")
const postsRouter = require("./routes/postsRouter.js")
const commentRouter = require("./routes/commentRouter.js")
const port = process.env.PORT

try{
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
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
