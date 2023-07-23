"use strict";

// Javascript Ecma Script.

console.log(`Welcome to Javascript Ecma Script !`);
console.log(`\n Javascript was created in 1996,`);
console.log(`In 1997, Javascript was submitted to ECMA International,`);
console.log(`In 2015, ECMAScript decided to switch to regular release and ES6 was formed.`);

// 2015 => ECMAScript 2015 or ES6 (6th Edition).
// now from 2016 to 2023 => ES7 to ES23.

// New Features in ES6 -

// The let keyword
// The const keyword
// TEMPLATE STRINGS
// Arrow Functions
// DESTRUCTURING
// OBJECT PROPERTIES
// DEFAULT ARGUMENTS
// REST OPERATORS
// SPREAD OPERATORS
// The ... Operator
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Object entries
// JavaScript Modules

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

console.log(mu(5, 2)); // here we are providing the values to sd and dc but what if any of them get no value?
// In that case we assign a default value to or parameter like this - 
function yamaha(mileage = 24, capacity = 12) {
    return mileage * capacity;
}

console.log(yamaha()); // no value provided so default values will be printed.


// 4) Arrow Function -
// Arrow functions{()=>} are a clear and concise method
// of writing normal/regular Javascript functions in a
// more accurate and shorter way. Arrow functions were
// introduced in the ES6 version.
// They make our code more structured and readable.  Example -

const average = () => { // fuction is decalred and initialized.
    let numm1 = 12, numm2 = 32, dum, avg;
    dum = numm1 + numm2;
    avg = dum / 2;
    return (`The average of ${numm1} and ${numm2} = ${avg}`)
}

console.log(average());


// 5) Destructuring -
// Destructuring is a JavaScript expression that makes it possible
// to unpack values from arrays, or properties from objects,
// into distinct variables. That is, we can extract data from arrays
// and objects and assign them to variables.   Example -

// unable to understand so exaple not given.

// 6) OBJECT PROPERTIES -