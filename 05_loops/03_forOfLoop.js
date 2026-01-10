// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];
for (const i of arr) {
    // console.log(i);
}

const greeting = "Hello world";
for (const i of greeting) {
    // console.log(`Each character is ${i}`);
}

// Maps - Stores unique values
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('IN', "India"); // Will not be in ouput (Unique only)
// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// Object - Cannnot iterate Object in this
const myObj = {
    "game1" :  "NFS",
    "game2" : "Spideman"
}
for (const [key, value] of myObj) {
    console.log(key, "-", value); // myObj is not iterable
}