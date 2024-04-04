const name = "Hithere"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Hi-there")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)

// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

/*
const newString = gameName.substring(3,7)
console.log(newString);

const anotherString = gameName.slice(-5 , 7)
console.log(anotherString);
*/

const newStringOne = "     Hithere          "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hithere.com/hi%20there"

console.log(url.replace('%20' , '-'));

console.log(url.includes('20'));

console.log(gameName.split('-'));
