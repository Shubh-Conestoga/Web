var express = require('express');
var router = express.Router();

// Initially thought that I ll put rock paper scissors game on home page and below code is fully working 
// but I changed mind
router.get('/',(req,res,next)=>{
  // var {data} = req.query;
  // const play = ['⛰️','📰','✂️'];
  // const playName = ['Rock','Paper','Sccisor'];
  // var userSelected;
  // var computerGuess;
  // var result;
  // if(play[data]!=undefined)
  // {
  //   userSelected = play[data];
  //   var num = Math.floor((Math.random()*10)%3);
  //   computerGuess = play[num];
    
  //   if(parseInt(data)===parseInt(num))
  //   {
  //     result = "Draw";
  //   }
  //   else if(data==0)
  //   {
  //     if(num==1)
  //     {
  //       result = "Computer";
  //     }
  //     else
  //     {
  //       result = "User";
  //     }
  //   }
  //   else if(data==1)
  //   {
  //     if(num==0)
  //     {
  //       result = "User";
  //     }
  //     else
  //     {
  //       result = "Computer";
  //     }
  //   }
  //   else
  //   {
  //     if(num==0)
  //     {
  //       result = "Computer";
  //     }
  //     else
  //     {
  //       result = "User";
  //     }
  //   }
  // }
  res.render('index',{title:'About Me'
  // ,input:`${play[data]}`,computer: computerGuess,winner:result
});

})

module.exports = router;
