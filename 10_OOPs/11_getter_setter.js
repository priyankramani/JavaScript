class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}priyank`;
    }

    set password(value){
        this._password = value;
    }
}

const priyank = new User("p@priyank.ai", "abc");
console.log(priyank.password); 
console.log(priyank.email); 