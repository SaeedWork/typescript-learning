// Functions in TypeScript (Type Annotion is Important)
// Function Declaration
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(2)); //4
console.log(addTwo("2")); //22  //Type Inference should not be allowed in functions
// Fixing the above function with Type Annotation
function addTwoFixed(num) {
    //num.toUpperCase(); //Error: Property 'toUpperCase' does not exist on type 'number'
    return num + 2;
}
console.log(addTwoFixed(2)); //4
//console.log(addTwoFixed("2")); //Error: Argument of type 'string' is not assignable to parameter of type 'number'
function signUpUser(username, email, isPaid) {
    console.log(username, email, isPaid);
}
signUpUser("saeed", "SK@GMAIL.COM", true); //saeed
//Default Parameters
function loginUser(username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(username, email, isPaid);
}
loginUser("saeed", "sk@gmail.com"); //saeed
//Return Type Annotation
function addThree(num) {
    return num + 3;
    //return "Hello"; //Error: Type '"Hello"' is not assignable to type 'number'
}
console.log(addThree(2)); //5
//Multiple Return Types and Arrow Functions
var isEligible = function (age) {
    if (age > 18) {
        return "You are eligible to vote";
    }
    else {
        return false;
    }
};
console.log(isEligible(25)); //You are eligible to vote
console.log(isEligible(15)); //false
//Smart Type Inference of Arrays in TypeScript
var heros = ["thor", "ironman", "captain"];
var villains = [1, 2, 3];
heros.map(function (hero) {
    return "Hero is " + hero;
});
villains.map(function (villain) {
    return "Villain is " + villain;
    //return 1; //Error: Type '1' is not assignable to type 'string'
});
//Void Return Types in Error Handling
function consoleError(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
consoleError("This is a console error message");
//throwError("This is a throw error message"); //Error: This is a throw error message
