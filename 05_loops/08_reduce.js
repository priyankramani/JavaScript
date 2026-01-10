const nums = [1, 2, 3];

// (Accumulator, Current Value(which is from the array))
// const total = nums.reduce(function (acc, currVal){
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal;
// }, 0);

const total = nums.reduce((acc, curr) => acc+curr, 0);
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);