let score = "40a";
let temp=null;

console.log(typeof score);
console.log(typeof(score));

let scopeInNumber = Number(score);
let nullNumber = Number(temp);

console.log(typeof scopeInNumber);
console.log(scopeInNumber); // NaN 40a as it is converted to number
console.log(typeof scopeInNumber); // typeof NaN = number

console.log(nullNumber); // Number(null)=0
console.log(typeof nullNumber);

let isLoggedIn=4;
let booleanIsLoggedIn=Boolean(isLoggedIn); // true
console.log(booleanIsLoggedIn);

let emptyString="";
let stringToBoolean=Boolean(emptyString); // Boolean("") = false
console.log(stringToBoolean);


