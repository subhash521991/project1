const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://dbNeha:dbNehashaw@atlascluster.vfz0br8.mongodb.net/")
.then(() => console.log("Mongo is connected"))
.catch(err => console.log(err))

app.listen(process.env.PORT || 9999, function(){
    console.log("express app running on port ' + (process.env.PORT || 9999");
})