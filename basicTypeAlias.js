"use strict";
// Basic 
Object.defineProperty(exports, "__esModule", { value: true });
var UserObj = {
    name: "John Doe",
    age: 25,
    isActive: true
};
function createNewUser(user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old, and is currently ").concat(user.isActive ? "active" : "inactive"));
    return user;
}
createNewUser(UserObj);
var myUser = {
    _id: 1,
    name: "John Doe",
    // age: 25, // this is optional
    isActive: true
};
myUser.age = 25; // this is optional and allowed to be changed after initialization.
var myCard = {
    cardnumber: 1234567890,
    expiryDate: "12/22",
    cvv: 123
};
