// for of 

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greeting  = "Hi there"
for (const greet of greeting) {
    // console.log(greet);
}


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")

// console.log(map);

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}


// not working for object
// for (const [key , valyue] of myObject) {
//     console.log(key, ':-' , value);
// }