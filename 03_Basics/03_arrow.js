const user = {
    name : "Priyank",
    price : 99,
    welcomeMsg : function(){
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMsg();
// user.name = "PK";
// user.welcomeMsg();

// console.log(this); // Output : {} (Empty object)

function chai(){
    const name = "Priyank";
    console.log(this);
    console.log(this.name); // Will give undefined because it only used in objects
}
// chai();

const chai2 = function(){
    const name = "Priyank";
    console.log(this.name);
}
// chai2(); // Still give undefined

/*----------------------------------------------Arrow Function-------------------------------------------------*/

const chai3 = () =>{
    const name = "Priyank";
    console.log(this.name);
}
// chai3();

const addone = (n1, n2) => {
    return n1 + n2;
}

// Implicit return
// const addtwo = (n1, n2) => n1 + n2;
// const addtwo = (n1, n2) => (n1 + n2);

const addtwo = (n1, n2) => ({name : "Priyank"}); // To take object as argument

console.log(addtwo(3,4));