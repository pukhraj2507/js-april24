let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));

let score1 = "33abc"

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)

console.log(typeof(valueInNumber1));
console.log(valueInNumber1);  // NaN

// "33" => 33
// "33abc" => NaN - not a number
// true => 1; false => 0
// null => 0


