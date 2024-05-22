function setUsername(fullname) {
    this.fullname = fullname;
    console.log('function has been called');    
}

function createUser(fullname,email,password){
    setUsername.call(this,fullname)
    this.email = email;
    this.password = password
}

const done = new createUser('Akash','akash@job.com',110);
console.log(done);


const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const anotherPerson = {
    firstName: "Jane",
    lastName: "Smith"
  };
  
  // Borrow the fullName method from person
  console.log(person.fullName.call(anotherPerson));