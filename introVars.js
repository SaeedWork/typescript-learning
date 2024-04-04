//start with tsc intro.ts
console.log("Hello World");
//Variable Declaration with Data Type anotations
//String
var greeting = "Hello Saeed QJ";
console.log(greeting.toLowerCase()); //hello saeed qj
//Number
var age = 25;
var weight = 75.5;
var height = 5.11;
console.log(age, weight.toExponential(), height); //25
//Boolean
var isAlive = true;
var isDead = false;
console.log(isAlive, isDead); //true false
//Type Inference
var message = "Hello World";
console.log(message.toUpperCase()); //HELLO WORLD
var number = 25;
console.log(number.toFixed(2)); //25.00
//Any Type - Turns off Type Checking (NoimplicitAny in tsconfig.json)
var hero;
function getHero() {
    return "Thor";
}
hero = getHero().toUpperCase();
var villain; //Type Annotation
function getVillain() {
    return "Loki";
}
villain = getVillain();
console.log(hero, villain); //THOR Loki
