const user = {
    username: "Hithere",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);

        // console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Lorem"
// user.welcomeMessage()

// console.log(this);


// function dot(){
//     let username = "Lorem"
//     console.log(this.username);
// }

// dot()


// arrow function

const dot = () => {
    let username = "Lorem"
    console.log(this.username);
}
// dot()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2    // implicit


// const addTwo = (num1 , num2) => (num1 + num2) 


const addTwo = (num1 , num2) => ({username: "Lorem"})

console.log(addTwo(2,5))