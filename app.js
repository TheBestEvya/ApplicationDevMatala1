const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port = process.env.PORT

// mongoose.connect(process.env.DB_URL,{useNewUrlParser : true})
// const db = mongoose.connection
// db.on("error",(err)=>{
// console.log(err)
// })
// db.once("open",()=>{
//     console.log("Connected to the DB")
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.listen(port, ()=>{
    console.log(`The App is running at localhost:${port}`)
})
