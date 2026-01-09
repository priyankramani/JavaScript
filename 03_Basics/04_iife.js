// Immediately Invoked Function Expressions - IIFE

// Named iife
(function chai(){
    console.log(`DB connected`);
})();

/*-------If we want to wrtie 2 iife together then make sure to have semicolon(;) at the end of the first iife------*/
( () => {
    console.log(`DB connected 2`);
})(); 

( (name) => {
    console.log(`My name is ${name}`);
})("Priyank"); 