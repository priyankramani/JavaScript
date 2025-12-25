/* 
Primitive : 
            7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
        
Reference (Non-primitive) : 
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