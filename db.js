const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://saralbjr:b1lagtU1gi2XIVvX@cluster0.cuklipl.mongodb.net/DrinkMandu'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('MongoDB Connection Successful');
})

db.on('error', ()=> {
    console.log('MongoDB Connection Failed!');
})

module.exports= mongoose;