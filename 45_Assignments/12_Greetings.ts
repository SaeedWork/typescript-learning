//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name

let frndNames1 : String[] ;
frndNames1 = ["Jerry", "Harry", "Mary","Alishaan", "Asfan", "Afnan", "Aamir", "Fardeel"];

for (let i = 0; i < frndNames1.length; i++) {
    console.log("Hello " + frndNames1[i] + "!, How are you doing these days?");
}