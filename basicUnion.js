// Basic Unions in TypeScript
// Union of two types (premitive types)
var score = 10;
score = '10'; // Allowed : as score can be string or number
var Saeed = { _id: 1, name: 'Saeed' };
Saeed = { _id: 1, userName: 'Saeed', isAccessGranted: true }; // Allowed : as Saeed can be User or Admin    
// Using Union in Function.
function getDBId(id) {
    console.log("DB Id is : ".concat(id));
}
getDBId(37865); // Allowed 
getDBId("39890"); // Allowed
function getDBId2(id) {
    if (typeof id === 'number') {
        id = id + 10; // Allowed
    }
    else if (typeof id === 'string') {
        id = id.toUpperCase();
    }
    return id;
}
console.log(getDBId2("kill3456"));
console.log(getDBId2(34));
// Using Union in Array
var randData = [1, 2, 3]; // this is like saying either all numbers or all strings
randData = ["Saeed", "Kashif", "Shahmeer"];
// randData = [1 ,2 , "Saeed"]; // Error this is not allowed, as it has both.
//using parantesis helps it understand that all these types are allowed in this one array.
var randData2 = [1, 2, 3, "Saeed", "Kashif", "Zubair", true, false];
// Union for Strict Assignment and allocation
var seatAllotment;
seatAllotment = "aisle"; // this is allowes as it is mentioned in the above conditiosn;
// seatAllotment = "crew" // Not Allowed (error) : as it is not one of the above given options
