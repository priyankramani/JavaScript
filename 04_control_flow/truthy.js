// falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values : "0", "false", " ", [], {}, function(){}, 

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


/*-----------------Nullish Coalescing Operator - (??) : Used to handle null, undefined-------------------*/

let val1;
// val1 = 5 ?? 10; // Output : 5
// val1 = null ?? 10; // Output : 10
// val1 = undefined ?? 10; // Output : 10
val1 = null ?? 10 ?? 15; // Output : 10
console.log(val1);

/*-----------------Ternary Operator-------------------*/

// condition ? true : false;
const price = 100;
price >= 80 ? console.log("Greater than 80") : console.log("Less than 80");