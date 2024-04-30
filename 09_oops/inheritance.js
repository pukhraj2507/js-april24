class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const lorem = new Teacher("lorem" , "lorem@gmail.com" , "1234")
lorem.logMe()

// lorem.addCourse()

const ipsum = new User("Ipsum")
ipsum.logMe()

console.log(lorem instanceof User);