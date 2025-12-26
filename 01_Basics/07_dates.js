let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

let createdDate = new Date(2004, 10, 10);
console.log(createdDate.toDateString());

let datetime = new Date(2025, 0, 23, 5, 4);
console.log(datetime.toLocaleString());

// let date = new Date("2023-01-14");
// let date = new Date("01-14-2023");

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Values will be in milisecond (if want in second then divide it by 1000)
console.log(createdDate.getTime());

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

// For customized format
newDate.toLocaleString('default', {
    weekday : "long"
})