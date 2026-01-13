class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // now it cannot be used in it's child or inherited class
    static createId(){
        return `123`;
    }
}

const priyank = new User("Priyank");
// console.log(priyank.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
// iphone.logMe();
// console.log(iphone.createId());