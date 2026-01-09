if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a); // undefined
// console.log(b); // undefined
// console.log(c); // There will be output due to var

// Nested Scopes
function one(){
    const name = "Priyank";
    function two(){
        const website = "YouTube";
        console.log(name);
    }
    // console.log(website); // Will give error
    two();
}
// one();

if(true){
    const name = "Priyank";
    if(name === "Priyank"){
        const website = " YouTube";
        // console.log(name + website)
    }
    // console.log(website);
}
// console.log(name);

/*--------------------------------------INTERESTING--------------------------------------*/

// console.log(addone(5)); // This will run and give the output
function addone(num){
    return num+1;
}
addone(5);

// console.log(addtwo(5)); // This will give error
const addtwo = function(num){
    return num+2;
}
addtwo(5);