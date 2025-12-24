let score = "33" // if score = "33abc" -> type - number, value - NaN (null -> 0, undefined -> NaN,  true -> 1)
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)