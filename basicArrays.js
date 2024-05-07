"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fruits = []; // Array of type never
//fruits.push('apple'); // Error: Argument of type 'apple' is not assignable to parameter of type never
// So we declare array as 
var fruits1 = [];
fruits1.push('apple'); // Allowed 
// Another way to declare array is
var fruits2 = [];
var Basket = [];
Basket.push({ name: 'apple', count: 5 });
// 2 Dimensional Array
var MLModel = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Array of Tuple
var employee = [
    ['John', 25],
    ['Doe', 30]
];
// Accessing Array Elements
console.log(employee[0][0]); // John
// Array Methods
var fruits3 = ['apple', 'orange', 'banana'];
console.log(fruits3.length); // 3
console.log(fruits3.pop()); // banana
console.log(fruits3.push('mango')); // 3
console.log(fruits3.shift()); // apple
console.log(fruits3.unshift('kiwi')); // 3
console.log(fruits3); // ['kiwi', 'orange', 'mango']
console.log(fruits3.splice(1, 1)); // ['orange']
console.log(fruits3); // ['kiwi', 'mango']
console.log(fruits3.concat(['apple', 'banana'])); // ['kiwi', 'mango', 'apple', 'banana']
console.log(fruits3.slice(1, 2)); // ['mango']
console.log(fruits3); // ['kiwi', 'mango']
console.log(fruits3.reverse()); // ['mango', 'kiwi']
console.log(fruits3.sort()); // ['kiwi', 'mango']
console.log(fruits3.indexOf('mango')); // 1
// Iterating Array
fruits3.forEach(function (fruit) {
    console.log(fruit);
});
// Map
var fruits4 = fruits3.map(function (fruit) { return fruit.toUpperCase(); });
console.log(fruits4); // ['KIWI', 'MANGO']
// Filter
var fruits5 = fruits3.filter(function (fruit) { return fruit === 'kiwi'; });
console.log(fruits5); // ['kiwi']
// Reduce
var fruits6 = fruits3.reduce(function (acc, fruit) { return acc + fruit; }, '');
console.log(fruits6); // kiwimango
