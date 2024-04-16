//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.


let favNum : Number = 5;

//setting a delay
console.log('My Favorite number is ...');
setTimeout(() => {
    console.log(favNum);
}, 5000);
//setting a delay
setTimeout(() => {
    console.log('Wait for it');
}, 3000);

