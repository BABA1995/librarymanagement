const mongo = require('./mongo');
const express = require('express');
const routes = require('./app');
const cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests'); 
})
 mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology:true
 });
 app.use(cors());
 mongoose.Promise =  global.Promise;

 app.use(bodyParser.json());
app.use('/api',routes);
app.use(function(err,req,res,next){
    console.log(err)
})