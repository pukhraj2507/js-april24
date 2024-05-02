class User{
    constructor(email , password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const lorem = new User("Lorem@gmail.com" , "abcd")
console.log(lorem.password);
console.log(lorem.email);