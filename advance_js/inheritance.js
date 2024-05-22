class User{
    constructor(username){
        this.username = username;
    }
    log(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,fees){
        super(username);
        this.email = email;
        this.fees = fees;
    }
    coursefees(){
        console.log(`my fees is ${this.fees}`);
    }
}

const obj1 = new Teacher('Paualmi',"paulami@jits.in",20000);

console.log(obj1.coursefees());;