// Basics of objects in TypeScript,

//Creating an object

const User = {
    name : "Saeed",
    age : 20,
    isActive : true
}
// Accessing the object
function createUser({name : string, isPaid: boolean}){}
createUser({name: "Saeed", isPaid: true});

// Returning an object
function createCourse(): {name: string, price: number} {
    return{ name: "TypeScript", price: 200};
}

//Typescript Sytax Issue
createUser({name: "Saeed", isPaid: true, /*email: "saeed@123.com"*/}); // Error : Object literal may only specify known properties, and 'email' does not exist in type '{ name: string; isPaid: boolean; }'.
//but if i make a seperate object then it will work
const newUser = {name: "Saeed", isPaid: true, email: "saeed@123.com"};
createUser(newUser); // No Error : Object literal may only specify known properties, and 'email' does not exist in type '{ name: string; isPaid: boolean; }' but it is accepted in newUser object.

// Type Allias
type User1 = {
    name: string;
    age: number;
    isActive: boolean;
}

function createNewUser(user: User1) : User1{
    console.log(`${user.name} is ${user.age} years old, and is currently ${user.isActive ? "active" : "inactive"}`);
    return user;
}

createNewUser(User);


export {};