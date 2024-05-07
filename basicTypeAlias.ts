// Basic 

const UserObj = {
    name: "John Doe",
    age: 25,
    isActive: true
}

// Type Allias
type User = {
    name: string;
    age: number;
    isActive: boolean;
}

function createNewUser(user: User) : User{
    console.log(`${user.name} is ${user.age} years old, and is currently ${user.isActive ? "active" : "inactive"}`);
    return user;
}
createNewUser(UserObj);


// Type Allias for Readonly and Optional properties

type User1 = {
    readonly _id: number; // using readonly makes it read-only and unchangeable after initialization.
    name: string;
    age?: number; // using ? makes it optional
    isActive: boolean;
    creditCard?: number; // using ? makes it optional
}

let myUser: User1 = {
    _id: 1,
    name: "John Doe",
    // age: 25, // this is optional
    isActive: true
}

myUser.age = 25; // this is optional and allowed to be changed after initialization.
// myUser._id = 2; // Error: Cannot assign to '_id' because it is a read-only property.

// mix and match of types , this a handy way to combine multiple types into one type.
// This is called Intersection Types and is useful the project is coming from multiple sources.

type cardNumber = {
    cardnumber: number;
}

type cardDate = {
    expiryDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

let myCard: cardDetails = {
    cardnumber: 1234567890,
    expiryDate: "12/22",
    cvv: 123
}


export {};