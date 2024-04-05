// singleton
// Object.create


const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Hithere",
    "full name": "Hi There",
    [mySym]: "myKey1",
    age: 18,
    location: "Surat",
    email: "hithere@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hithere@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "hither@mcrosoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS Use: ${this.name}`);
}

console.log(JsUser.greetingTwo());
