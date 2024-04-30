function multipleBy5(num){
    return num*5
}

multipleBy5.power = 5

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
    console.log(`New score is ${this.score}`);
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const rahul = new createUser("Rahul" , 67)
const manoj = new createUser("Manoj" , 46)

rahul.printMe()
rahul.increment()
rahul.increment()
rahul.printMe()