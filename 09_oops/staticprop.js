class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return "1234"
    }
}

const lorem = new User("Lorem")
// console.log(lorem.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "iphone@apple.com")
console.log(iphone.logMe());
console.log(iphone.createId());