//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


let frndNames : String[] ;
frndNames = ["Jerry", "Harry", "Mary","Alishaan", "Asfan", "Afnan", "Aamir", "Fardeel"];

for (let i = 0; i < frndNames.length; i++) {
    console.log(frndNames[i].toLocaleUpperCase());
}