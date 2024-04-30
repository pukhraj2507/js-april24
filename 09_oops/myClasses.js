// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const lorem = new User("Lorem" , "lorem@gmail.com" , "1234")

console.log(lorem.encryptPassword());
console.log(lorem.changeUsername());


// ----------- behind the scene ---------

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const ipsum = new User("Ipsum" , "ipsum@gmail.com" , "1234")

console.log(ipsum.encryptPassword());
console.log(ipsum.changeUsername());