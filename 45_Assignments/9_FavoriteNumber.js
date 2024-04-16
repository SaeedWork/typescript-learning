//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNum = 5;
console.log('My Favorite number is ...');
setTimeout(function () {
    console.log(favNum);
}, 5000);
setTimeout(function () {
    console.log('Wait for it');
}, 3000);
