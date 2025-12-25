/* 
Primitive : 
            7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
        
Reference (Non-Primitive) : 
                            Array, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const heros = ["abc", "def"];   // Array defined

let myObj = {                   // Object defined
    name : "Priyank",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}


/*----------------------------------------Memory----------------------------------------*/

// Stack (Primitive) : Takes the copy of the variable
// Heap (Non-Primitive) : Takes the original value (Reference)

let myName = "Priyank"
let yourName = myName  // Takes the copy of the original - Primitive
yourName = "KK"

console.log(myName)
console.log(yourName)

let userOne = {
    email : "user1@g.com",
    age : 22
}
let userTwo = userOne  // Takes the original reference
userTwo.email = "user2@g.com"

console.log(userOne.email)
console.log(userTwo.email)