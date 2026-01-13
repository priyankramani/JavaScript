/*-----------------Object literals-----------------*/
const user = {
    username : "Priyank",
    loginCnt : 1,
    signed : true,
    getUserDetails : function(){
        // console.log("Got user details");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

/*-----------------Constructor function-----------------*/
function User(username, loginCnt, isLoggedin){
    this.username = username;
    this.loginCnt = loginCnt;
    this.isLoggedin = isLoggedin;
    return this;
}
// Whenever we use new keyword, an empty object will be created which is called instance.
// Due to new a *Constructor function* is called ans set our arguments using this.
const user1 = new User("Priyank", 12, true);
const user2 = new User("Priyank2", 22, false);
console.log(user1);
console.log(user1.constructor);
console.log(user2);