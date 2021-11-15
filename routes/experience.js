var express = require('express');
var app = express();

app.get('/',(req,res,next)=>{
    res.render('experience',{title:"Experience"})
});

module.exports = app;
