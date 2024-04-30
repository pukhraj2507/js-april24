function SetUsername(username){
    // Complex DB calls

    this.username = username
    console.log("Called!!");
}

function createUser(username, email, password){
    SetUsername.call(this , username)

    this.email = email
    this.password = password
}

const Lotrem = new createUser("lorem", "lorem@google.com", "12345673")
console.log(Lotrem);