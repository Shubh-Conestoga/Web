var express = require('express');
var app = express();

// Handling / req
app.get('/',(req,res,next)=>{
    res.render('experience',{title:"Experience"})
});

module.exports = app;
