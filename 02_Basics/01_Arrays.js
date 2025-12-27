const arr0 = [0, 1, 2, 3, true, "Hello"];
const arr = new Array(1, 2, 3, 4);

// console.log(arr0[2]);

/*----------------------------Array Methods------------------------*/
arr.push(5);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(9); // Shift all the values of array and insert at the front of the array (Not suggested)
console.log(arr); 

arr.shift();
console.log(arr); // Remove the first

console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newArr = arr.join(); // Convert all elements of array into string
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

/*-------------------------IMP-----------------------*/
console.log("A", arr);

const n1 = arr.slice(1, 3);
console.log(n1);
console.log("B", arr);

const n2 = arr.splice(1, 3);
console.log(n2);
console.log("C", arr);