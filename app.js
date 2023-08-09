const express = require('express');
const bodyParser = require("body-parser");
const route = require('./routes/route.js');
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://subhash521991:Maurya%40123@cluster0.mzx155l.mongodb.net/blogging-site')

.then( () => console.log("Mongo is connected"))

.catch(err => console.log(err))

app.use('/', route); 


app.listen(process.env.PORT || 8000, function () {

    console.log(`Blogging Server running on port ` + (process.env.PORT || 8000 ));
    
})