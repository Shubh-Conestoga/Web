var express = require('express');
var router = express.Router();

// Handaling post /submit req 
router.post('/submit',(req,res,next)=>{
    // getting email and message from req body
    var {email} = req.body;
    var {message} = req.body;
    var isSuccess = true;
    //checking if it is valid or not
    if(email==="" || message==="")
    {
        isSuccess=false
    }
    // logging data
    console.log(email , message);
    // sending data to page
    res.render('contact',{
        "Message":message,
        "Email":email,
        "success":isSuccess,
        title:"Contact",
        // for denoting that data is from /submit page so show data valid/invalid msg
        "core":false,
    }) 
});

// Handaling get / req 
router.get('/',(req,res,next)=>{
    
    res.render('contact',{
        title:"Contact",
        // for denoting that data is from /submit page so do not show data valid/invalid msg
        "core":true,
    })
});

module.exports = router;