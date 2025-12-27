const mine = ["a", "b", "c"];
const yours = ["x", "y", "z"];

// mine.push(yours);
// console.log(mine);
// console.log(mine[3][1]);

// Concat
// const all = mine.concat(yours);
// console.log(all);

// Spread
const all = [...mine, ...yours];
console.log(all);

const img = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real = img.flat(Infinity); // will write all the values of array in single line (Argument is the depth)
console.log(real);

console.log(Array.isArray("Priyank"));
console.log(Array.from("Priyank"));
console.log(Array.from({name : "Priyank"})); // We have to tell, we want to make array of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));