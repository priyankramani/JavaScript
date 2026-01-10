const arr = ["js", "rb", "py", "cpp", "java"];
arr.forEach(function (item) {
    // console.log(item);
})

// Writing function using arrow function
arr.forEach((item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
arr.forEach(printMe); // Not use printMe(), only printMe : Just reference not execution

arr.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "Javascript",
        languageShort : "js"
    },
    {
        languageName : "C++",
        languageShort : "cpp"
    },
    {
        languageName : "Python",
        languageShort : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageShort);
})