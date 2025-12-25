const name = "Priyank"
const age = 21

// console.log(name + age)  // Outdated

console.log(`Hello my name is ${name} and my age is ${age}`)

const myName = new String("Priyank-Ramani-565");

console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(4));  // 0-based
console.log(myName.indexOf('y'));

const substr = myName.substring(0, 4); // (starting position, length)
console.log(substr);

const another = myName.slice(-8, 4) // Negative means starting from back
console.log(another);

const aanother = "        Priyank       ";
console.log(aanother);
console.log(aanother.trim());

const url = "https://priyank.com/priyank%20ramani"

console.log(url.replace("%20", "-"));
console.log(url.includes("priyank"));
console.log(url.includes("abc"));

console.log(myName.split("-"));  // Gives the array of string seperated by '-'