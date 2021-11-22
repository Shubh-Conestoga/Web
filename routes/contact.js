var express = require('express');
var router = express.Router();

router.post('/submit',(req,res,next)=>{
    var {email} = req.body;
    var {message} = req.body;
    var isSuccess = true;
    if(email==="" || message==="")
    {
        isSuccess=false
    }
    console.log(email , message);
    res.render('contact',{
        "Message":message,
        "Email":email,
        "success":isSuccess,
        title:"Contact",
        "core":false,
    }) 
});


router.get('/',(req,res,next)=>{
    
    res.render('contact',{
        title:"Contact",
        "core":true,
    })
});

module.exports = router;