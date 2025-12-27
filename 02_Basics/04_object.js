// const user = new Object(); // Singleton object
const user = {}; // Non-singleton object
user.name = "Priyank";
user.id = "123abc";
user.email = "abc@gmail.com";
console.log(user);

const user2 = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "Priyank",
            lastname : "Ramani"
        }
    }
}
console.log(user2.fullname);
console.log(user2.fullname.username.firstname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2); // {} is not necessary but preferable, {} will be target and other will act as source
const obj3 = {...obj1, ...obj2};
console.log(obj3);

// Array of objects
const users = [
    {
        name : "ABC",
        age : 21
    },
    {
        name : "ABC",
        age : 21
    },
    {
        name : "ABC",
        age : 21
    }
]
console.log(users[1].name);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("name"));