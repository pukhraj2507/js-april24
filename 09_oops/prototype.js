let myName = "lorem"
let trueName = "lorem          "

// console.log(myName.length);
// console.log(trueName.trueLength);


let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.lorem = function(){
    console.log(`lorem is present in all objects`);
}

Array.prototype.heyLorem = function(){
    console.log("Lorem says hello");
}

// heroPower.lorem()
// myHeros.lorem()
// myHeros.heyLorem()
// heroPower.heyLorem()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Inheritance

const User = {
    name: "lorem",
    email: "lorem@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "LoremIpsum    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Lorem".trueLength()
"  Ipsum    ".trueLength()