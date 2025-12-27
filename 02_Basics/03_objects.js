// Singleton
// Object create
 
// Object literals
const sym = Symbol("Key1");

const user = {
    name : "Priyank",
    "Full name" : "P Ramani",
    [sym] : "MyKey",            // Only way to use it as Symbol
    age : 21,
    email : "abc@gmai.com"
}
console.log(user.name);
console.log(user["name"]);

// console.log(user.Full name); // Not accessible
console.log(user["Full name"]);

console.log(user[sym]); // Only way to access

user.age = 22;
// Object.freeze(user); // Freeze the object, no changes will happen now

user.greeting = function(){
    console.log("Hello there");
}
user.greeting2 = function(){
    console.log(`Hello there, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());