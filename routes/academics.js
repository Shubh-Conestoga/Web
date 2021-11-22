var express = require('express');
var app = express();

// Handaling / req 
app.get('/',(req,res,next)=>{
    res.render('academics',{title:"Academics"})
});

module.exports = app;   