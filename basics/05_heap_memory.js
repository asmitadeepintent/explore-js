// JS don't have control over memory.

// stack memory - Primitive types
// we get copy of stack memory
let myName="Asmita"; // stack
let anotherNAme=myName;
console.log(myName,anotherNAme);
anotherNAme="Dhiraj";
console.log(myName,anotherNAme);



// heap memory - Non-primitive types
// we get reference
let user={
    id:23,
    emailId:"asmita@gmail.com",
    name:"Asmita"
};
let userTwo = {id:user.id,emailId:user.emailId,name:user.name};
let userThree=user; // same is being referenced
console.log(user,userThree,userTwo);
user.name="Dhiraj";
console.log(user,userThree,userTwo);