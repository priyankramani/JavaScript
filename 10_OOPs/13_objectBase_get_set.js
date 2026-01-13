const User = {
    _email: 'p@pr.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email); // P@PR.COM
console.log(tea._email); // p@pr.com