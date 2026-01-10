// for in loop for Object

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}
for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
}

// On Array
const arr = ["js", "rb", "py", "cpp", "java"];
for (const key in arr) {
    // console.log(key);
    // console.log(arr[key]);
}

// On Map - Cannnot iterate on map using this
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('IN', "India"); // Will not be in ouput (Unique only)
for (const key in map) {
    // console.log(key);
}

