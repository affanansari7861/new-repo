const {readFile , writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf-8',function(err,result){
   if(err){
      console.log(err);
      return
   }
const first = result;
readFile('./content/second.txt','utf-8',function(err,result){
   if(err){
      console.log(err);
      return;
   }
   const second = result;
   writeFile('./content/resultAsync.txt',
   `here is the result : ${first}, ${second}`,
   function(err,result){
      if(err){
         console.log(err);
         return;
      }
   console.log('done with ths task');


   });
})
})
console.log('starting new task');