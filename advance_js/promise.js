let promise = new Promise(function(resolve,reject){
   let name1='Akash'
   let name2 = 'Akash'
   if(name1===name2){
    resolve();
   }else{
    reject();
   }
});
promise.then(function(){
  console.log("You are correct");
  
}).catch(function(){
  console.log("you are wrng");
})

