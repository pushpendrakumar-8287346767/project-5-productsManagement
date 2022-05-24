const express = require('express');
const mongoose=require('mongoose')
const bodyparser = require('body-parser');
const app= express();
const route= require('./routes/routes')
// const router = express.Router();
const multer= require("multer");
const { AppConfig } = require('aws-sdk');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use( multer().any())

mongoose.connect("mongodb+srv://user:ISjwDttcDksEnCcv@cluster0.hja9z.mongodb.net/group30Database?authSource=admin&replicaSet=atlas-3xefdb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
{useNewUrlParser:true})

.then(() => {
    console.log("Mongo db is connected")
}).catch((err) => {
    console.log(err.message)
});


app.use('/',route)

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("app is listen on port" + (process.env.PORT || 3000))
})