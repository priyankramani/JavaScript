// ------------------------------------------Conversions------------------------------------------

let score = "33" // if score = "33abc" -> type - number, value - NaN (null -> 0, undefined -> NaN,  true -> 1)
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

// ------------------------------------------Operations------------------------------------------
let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
// console.log(str3)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

console.log(true)
console.log(+true)
console.log(+"")