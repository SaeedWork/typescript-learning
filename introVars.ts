//start with tsc intro.ts
console.log("Hello World");

//Variable Declaration with Data Type anotations
//String
let greeting: string = "Hello Saeed QJ";
console.log(greeting.toLowerCase()); //hello saeed qj


//Number
let age: number = 25;
let weight: number = 75.5;
let height: number = 5.11;

console.log(age, weight.toExponential(), height); //25

//Boolean
let isAlive: boolean = true;
let isDead: boolean = false;

console.log(isAlive, isDead); //true false


//Type Inference
let message = "Hello World";
console.log(message.toUpperCase()); //HELLO WORLD
let number = 25;
console.log(number.toFixed(2)); //25.00

//Any Type - Turns off Type Checking (NoimplicitAny in tsconfig.json)
let hero ;
function getHero(){
    return "Thor";
}
hero = getHero().toUpperCase();

let villain : String; //Type Annotation
function getVillain(){
    return "Loki";
}
villain = getVillain();
console.log(hero, villain); //THOR Loki
