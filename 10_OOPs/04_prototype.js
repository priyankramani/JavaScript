/*
function--------------\
                       \
array--------------------> Object ---> null
                       /      
string----------------/

*/

// let myName = "Priyank     ";
// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"];


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.priyank = function(){
    console.log(`Priyank is present in all objects`);
}

Array.prototype.heyPriyank = function(){
    console.log(`Priyank says hello`);
}

// heroPower.priyank();
// myHeros.priyank();

// myHeros.heyPriyank();
// heroPower.heyPriyank(); // Do not have access of ARRAY methods

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// Above starting question
let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"priyank".trueLength();
"iceTea".trueLength();