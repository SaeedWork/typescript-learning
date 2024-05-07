"use strict";
// Basics of objects in TypeScript,
Object.defineProperty(exports, "__esModule", { value: true });
//Creating an object
var User = {
    name: "Saeed",
    age: 20,
    isActive: true
};
// Accessing the object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Saeed", isPaid: true });
// Returning an object
function createCourse() {
    return { name: "TypeScript", price: 200 };
}
//Typescript Sytax Issue
createUser({ name: "Saeed", isPaid: true, /*email: "saeed@123.com"*/ }); // Error : Object literal may only specify known properties, and 'email' does not exist in type '{ name: string; isPaid: boolean; }'.
//but if i make a seperate object then it will work
var newUser = { name: "Saeed", isPaid: true, email: "saeed@123.com" };
createUser(newUser); // No Error : Object literal may only specify known properties, and 'email' does not exist in type '{ name: string; isPaid: boolean; }' but it is accepted in newUser object.
function createNewUser(user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old, and is currently ").concat(user.isActive ? "active" : "inactive"));
    return user;
}
createNewUser(User);
