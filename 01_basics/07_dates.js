

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCurrentDate = new Date(2023 , 0 , 23)
// let myCurrentDate = new Date(2023 , 0 , 23 , 5, 3)
// let myCurrentDate = new Date("2023-01-14")
let myCurrentDate = new Date("10-01-2023")
// console.log(myCurrentDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCurrentDate.getTime());

// in seconds
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})

