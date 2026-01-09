function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("k");
}
// sayMyName();

// function add2Numbers(number1, number2){
//     console.log(number1 + number2);
// }
// add2Numbers(); // Output : NaN
// add2Numbers(3, 4);
// const result = add2Numbers(3, 4); // If print result then it will be undefined

function add2Numbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
const result = add2Numbers(4, 4);
// console.log(result);

function loginMsg(username = "Default"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in.`;
}
// console.log(loginMsg("Priyank"));
// console.log(loginMsg()); // Output : undefined just logged in.

function calculatePrice(...num1){
    return num1;
}
// console.log(calculatePrice(200));
// console.log(calculatePrice(200, 300, 400)); // Output will be still 200
// console.log(calculatePrice(200, 300, 400)); // After using REST operator(...), Output : [ 200, 300, 400 ]

const user = {
    name : "Priyank",
    age : 20
}
function handleObject(anyobject){
    console.log(`Name is ${anyobject.name} and his age is ${anyobject.age}`)
}
// handleObject(user);
// handleObject({
//     name : "Priyank2",
//     age : 21
// });

const myArray = [1, 2, 3, 4, 5];
function usingArray(arr){
    return arr[2];
}
// console.log(usingArray(myArray));
console.log(usingArray([1, 2, 3, 4, 5]));