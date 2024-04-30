const user = {
    username: "Lorem",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);



// -----------------------------------------------------------

function User(username , logingCount, isLoggedIn){
    this.username = username
    this.loginCount = logingCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this 

}

const userOne = new User("Hi there", 12 , true)
const userTwo = new User("Ipsum" , 18, false)
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);