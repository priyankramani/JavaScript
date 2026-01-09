// const isLoggedIn = true;
// const temp = 45;
// if(temp < 50){
//     console.log("Temp is less than 50");
// }
// else{
//     console.log("Temp is greater than 50");
// }

// const balance = 1000;
// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggesIn = true;
const debitCard = true;
if(userLoggesIn && debitCard){
    console.log("Allowed to buy");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}