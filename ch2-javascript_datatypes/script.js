"use strict";

// In Javascript, we exclusively do not define the data type of the variable seperately.
// It is because it can automatically determine the data type of a variable.
// Which can be a problem for a begonner to understand and in some cases for the experienced developer too.
// So, there is a typeof() operator in JavaScript which determins the data type of a variable.

//example -
// const prompt_age = prompt(" Please Enter Your Age = "); // we used prompt() to take input from the user in the browser.
// const age = parseInt(prompt_age); // Converted prompt_age to interger using parseInt().

const age = 32;

// There are 6 Data Types in JavaScript which are primitive types-
// *undefined : typeof instance === "undefined"
// *Boolean : typeof instance === "boolean"
// *Number : typeof instance === "number"
// *String : typeof instance === "string"
// *BigInt : typeof instance === "bigint"
// *Symbol : typeof instance === "Symbol"

// The entire course documented is from Thapa technical Javascript Video and it either follows ES20 or ES21.

if (typeof age === "number") {
	console.log(" Your Data Type is number!");
} else {
	console.log(" Your Data Type is not number!");
}

// *** Important ***

// When you add any number with any string then it will concatenate and display but in case of
// substracted, it will do the mathematical operation. Example -

console.log(9 + "6"); // The output is concatinated string
console.log(9 + "Car"); // The output is concatinated string
// But when we do substraction with a number inside "" which makes it string, it works and does the mathematical operation -
console.log(200 - "12"); // The output is mathematical operation which is 118.
console.log(200 - "raju"); // The output is NaN which means not a number.
// This is because (maybe) when javascript tried to substract, it fould it not a number and returned NaN.
