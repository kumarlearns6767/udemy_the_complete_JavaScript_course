"use strict";

// Javascript Ecma Script.

console.log(`Welcome to Javascript Ecma Script !`);
console.log(`\n Javascript was created in 1996,`);
console.log(`In 1997, Javascript was submitted to ECMA International,`);
console.log(`In 2015, ECMAScript decided to switch to regular release and ES6 was formed.`);

// 2015 => ECMAScript 2015 or ES6 (6th Edition).
// now from 2016 to 2023 => ES7 to ES23.

// New Features in ES6 -

// 1) The let keyword
// 2) The const keyword
// 3) TEMPLATE STRINGS
// 4) Arrow Functions
// 5) DESTRUCTURING
// 6) OBJECT PROPERTIES
// 7) DEFAULT ARGUMENTS
// 8) REST OPERATORS
// 9) SPREAD OPERATORS
// 10) The ... Operator
// 11) For/of
// 12) Map Objects
// 13) Set Objects
// 14) Classes
// 16) Promises
// 17) Symbol
// 18) Default Parameters   ------ Done

// 19) Function Rest Parameter
// 20) String.includes()
// 21) String.startsWith()
// 22) String.endsWith()
// 23) Array.from()
// 24) Array keys()
// 25) Array find()
// 26) Array findIndex()
// 27) New Math Methods
// 28) New Number Properties
// 29) New Number Methods
// 30) New Global Methods
// 31) Object entries
// 32) JavaScript Modules

// *** The Below explanation order is taken from Thapa Technical Javascript course on Youtube. So, Please don't complain. ***


// ----------  Here are the ES6 features and dunction explained below -----------

// 1) let and cost are already explain in ch1 but var is valid inside function(function scope) and let,const is valid in the declared block.

// 2) template litera/string I already know.


// 3) Default parameters-

// Default function parameters allow named parameters to be initialized
// with default values if no value or undefined is passed. Example- 

function mu(sd, dc) {
    return sd * dc; // doubt - return is returning the result. 
    // That is understood but where the result is caught and
    // without catching/storing, 
    // how it is getting printed in console.log() ?
}
console.log(mu(5)); // here we are providing the values to sd and dc but what if any of them get no value?
// It returns NaN because no value was passed and number cannot be multiplied with empty value so Nan is returned.

// In the above case (line no 64), we assign a default value to or parameter like this - 
function yamaha(mileage = 24, capacity = 12) {
    return mileage * capacity;
}

console.log(yamaha()); // no value provided so default values will be printed.


// Another example for practise-

function sub(xx, yz = 2) { // we initialized yz with a default value to prevent NaN error
    return xx - yz;
}

console.log(`the substraction = ${sub(10)}`); // no value provided for yz so default value will ve taken for use.



// 4) Arrow Function -
// Arrow functions{ 
// '()=>' 
// } are a clear and concise method of writing normal/regular Javascript functions 
// in a ore accurate and shorter way. Arrow
// functions were introduced in the ES6 version.
// They make our code more structured and readable.  Example -

let divi = () => {
    let var1 = parseInt(prompt('Enter the 1st number = '));
    let var2 = parseInt(prompt('Enter the 2nd number = '));
    let dib;
    if (isNaN(var1) || isNaN(var2)) {
        alert('Please enter a number !!');
    } else {
        alert(dib = var1 / var2);
    }
}
divi();


// 5) Destructuring -
// Destructuring is a JavaScript expression that makes it possible
// to unpack values from arrays, or properties from objects,
// into distinct variables. That is, we can extract data from arrays
// and objects and assign them to variables.   Example -

// unable to understand so exaple not given.

// 6) OBJECT PROPERTIES -