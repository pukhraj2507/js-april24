
/*
// singleton

const user = new Object()

console.log(user);

*/

/*
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Tommy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
*/

const regularUser = {
    email: "tommy@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Hi",
            lastname: "there"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = { obj1 , obj2}

// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1 , ...obj2}

// console.log(obj3);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Tommy"
}

// course.courseInstructor

// destructor of Object

// const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(instructor);
