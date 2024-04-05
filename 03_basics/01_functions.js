
/*
function greeting(){
    console.log("Hi there!");
}
// greeting();

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1 , num2){
    let result = num1 + num2
    return result // num1 + num2
}

const result = addTwoNumbers(4,7)

console.log("result: ", result);

function loginUserMessage(username = "Hithere"){
    if(!username){            // or if(username === undefined)
        console.log("Please enter a username");
        return
    }

    return `${username} jsut logged in.`
}

// console.log(loginUserMessage("Pskunk")); 
console.log(loginUserMessage())
// if you dont put any value , it will return undefined

*/


// rest operators in function
function calculateCartPrice(val1 , val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200 ,400 ,500, 2000));

const user = {
    username: "Hithere",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "dommy",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray))