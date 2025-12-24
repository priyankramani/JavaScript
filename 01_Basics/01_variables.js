const acID = 12345
let acEmail = "pk@pk.com"
var acPass = "123456" // Prefer not to use var because of issue in block scope and functional scope 
acCity = "Maliyasan"
let acState; // Default value will be undefined

// acID = 123 // Not allowed
acEmail = "PK@PK.com"
acPass = "123"
acCity = "Mali"

console.table([acID, acEmail, acPass, acCity])