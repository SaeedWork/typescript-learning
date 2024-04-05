// Functions in TypeScript (Type Annotion is Important)

// Function Declaration
function addTwo(num){  //Type Inference in Functions is not recommended
    return num + 2;
}

console.log(addTwo(2)); //4
console.log(addTwo("2")); //22  //Type Inference should not be allowed in functions

// Fixing the above function with Type Annotation
function addTwoFixed(num: number){
    //num.toUpperCase(); //Error: Property 'toUpperCase' does not exist on type 'number'
    return num + 2;
}

console.log(addTwoFixed(2)); //4
//console.log(addTwoFixed("2")); //Error: Argument of type 'string' is not assignable to parameter of type 'number'

function signUpUser(username: string, email: string, isPaid: boolean){
    console.log(username, email, isPaid);
}

signUpUser("saeed", "SK@GMAIL.COM", true); //saeed

//Default Parameters
function loginUser(username: string, email: string, isPaid: boolean = false){ //Default Parameter created for isPaid
    console.log(username, email, isPaid);
}

loginUser("saeed", "sk@gmail.com"); //saeed


//Return Type Annotation
function addThree(num: number): number{ //Return Type Annotation defined as number
    return num + 3;
    //return "Hello"; //Error: Type '"Hello"' is not assignable to type 'number'
}

console.log(addThree(2)); //5


//Multiple Return Types and Arrow Functions
const isEligible = (age : number ): string | boolean => { //Multiple Return Types, Arrow Function Declaration
    if (age > 18){
        return "You are eligible to vote";
    }else{
        return false;
    }
};

console.log(isEligible(25)); //You are eligible to vote
console.log(isEligible(15)); //false

//Smart Type Inference of Arrays in TypeScript
const heros = ["thor", "ironman", "captain"];
const villains = [1,2,3];

heros.map((hero) => { //Typescript will infer the type of hero as string automatically
    return "Hero is " + hero;
});

villains.map((villain): string => { //Typescript will infer the type of villain as number automatically
    return "Villain is " + villain;
    //return 1; //Error: Type '1' is not assignable to type 'string'
});


//Void Return Types in Error Handling
function consoleError(message: string): void{ //Void Return Type declaration is very important as it will not return anything
    console.log(message);
}

function throwError(message: string): never{ //Never Return Type, it tells that the function will never return anything, used in Error Handling (Recommended in Documentation)
    throw new Error(message);
}

consoleError("This is a console error message");
//throwError("This is a throw error message"); //Error: This is a throw error message
