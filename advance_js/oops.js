/*const user ={
    username: "akash",
    logincount: 10,
    signedIN: true,

    getyourname: function(){
       console.log("hello word");
    }
}

console.log(user.getyourname());*/

function userdetails(Username,rollno,attendence){
   this.Username = Username;
   this.rollno = rollno;
   this.attendence = attendence;

   return this;
}

const check1 = userdetails("akash",1,true);
const check2 = userdetails('sita',2,false)
console.log(check1);