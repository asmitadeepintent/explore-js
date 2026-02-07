let score = "40a";
let temp=null;

// console.log(typeof score);
// console.log(typeof(score));

let scopeInNumber = Number(score);
let nullNumber = Number(temp);

// console.log(typeof scopeInNumber);
// console.log(scopeInNumber); // NaN 40a as it is converted to number
// console.log(typeof scopeInNumber); // typeof NaN = number

// console.log(nullNumber); // Number(null)=0
// console.log(typeof nullNumber);

let isLoggedIn=4;
let booleanIsLoggedIn=Boolean(isLoggedIn); // true
// console.log(booleanIsLoggedIn);

let emptyString="";
let stringToBoolean=Boolean(emptyString); // Boolean("") = false
// console.log(stringToBoolean);


/// ****** Operations

let value = 3;
let negative = -value;
console.log(negative);
console.log(2*2);
console.log(2**3); // 2 raised to power 3

console.log("1"+2); // 12
console.log("1"+2+3); //123
console.log(1+2+"3"); // 33
console.log(true); // true
console.log(+true); // 1