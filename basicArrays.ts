const fruits = []; // Array of type never
//fruits.push('apple'); // Error: Argument of type 'apple' is not assignable to parameter of type never

// So we declare array as 
const fruits1 : string[] = [];
fruits1.push('apple'); // Allowed 

// Another way to declare array is
const fruits2 : Array<string> = [];

// Type Alias for Array

type fruit = {
    name: string;
    count: number;
}

const Basket : fruit[] = [];
Basket.push({name: 'apple', count: 5});

// 2 Dimensional Array
const MLModel : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Array of Tuple
const employee : [string, number][] = [
    ['John', 25],
    ['Doe', 30]
];

// Accessing Array Elements
console.log(employee[0][0]); // John

// Array Methods
const fruits3 : string[] = ['apple', 'orange', 'banana'];
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
fruits3.forEach(fruit => {
    console.log(fruit);
});

// Map
const fruits4 = fruits3.map(fruit => fruit.toUpperCase());
console.log(fruits4); // ['KIWI', 'MANGO']

// Filter
const fruits5 = fruits3.filter(fruit => fruit === 'kiwi');
console.log(fruits5); // ['kiwi']

// Reduce
const fruits6 = fruits3.reduce((acc, fruit) => acc + fruit, '');
console.log(fruits6); // kiwimango

export {}; // To avoid global scope
