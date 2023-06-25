"use strict";

// In Javascript, we exclusively do not define the data type of the variable seperately.
// It is because it can automatically determine the data type of a variable.
// Which can be a problem for a begonner to understand and in some cases for the experienced developer too.
// So, there is a typeof() operator in JavaScript which determins the data type of a variable.

//example -
// const prompt_age = prompt(" Please Enter Your Age = "); // we used prompt() to take input from the user in the browser.
// const age = parseInt(prompt_age); // Converted prompt_age to interger using parseInt().

const age = 32;

// The entire course documented is from Thapa technical Javascript Video and it either follows ES20 or ES21.

if (typeof age === "number") {
	console.log(" Your Data Type is number!");
} else {
	console.log(" Your Data Type is not number!");
}

// There are 6 Data Types in JavaScript which are primitive types-
// *undefined : typeof instance === "undefined"
// *Boolean : typeof instance === "boolean"
// *Number : typeof instance === "number"
// *String : typeof instance === "string"
// *BigInt : typeof instance === "bigint"
// *Symbol : typeof instance === "Symbol"

// Let's Take a look at the datatypes one by one -
// Undefined Data Types -
let houseowner;
console.log(houseowner);
console.log(typeof houseowner);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// Boolean Data Types -
const chair = true;
console.log(chair);
console.log(typeof chair);
// We can clearly see that upon printing the variable, it returns true and the typeof
// operator returns undefined. It is because there is no value assigned to the variable.
// And the condition matches whicb is true.

// Number Data Types -
const student_class = 12;
console.log(student_class);
console.log(typeof student_class);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// String Data Types -
const founder = "binod";
console.log(founder);
console.log(typeof founder);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// BigInt Data Types -
let biginteger = 12121212121212121212121212121212121212;
console.log(biginteger);
console.log(typeof biginteger);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// Symbol Data Types -
let dimbol = "dimboll";
console.log(dimbol);
console.log(typeof dimboll);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// *** Important ***

// When you add any number with any string then it will concatenate and display but in case of
// substracted, it will do the mathematical operation. Example -

console.log(9 + "6"); // The output is concatinated string
console.log(9 + "Car"); // The output is concatinated string
// But when we do substraction with a number inside "" which makes it string, it works and does the mathematical operation and it is a bug is Javascript-
console.log(200 - "12"); // The output is mathematical operation which is 118.
console.log(200 - "raju"); // The output is NaN which means not a number.
// This is because (maybe) when javascript tried to substract, it fould it not a number and returned NaN.

// Whe you add " " (which is a black single space) with any number and try to print then
// That blank space (be it single or moe than one) will be printed along with the number in a concatinated Form.
// Example -
console.log("" + 12);

// Now, let's look at some interview Questions -

// 1) What is the difference between null and undefined in javascript?
//=> Answer -

// 2) What is NaN in javascript?
// => Answer - NaN is a property of the global object. In other words, it is a variable in global scope. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.
// the initial value of NaN is Not a Number.
// Demostration -
const myNumber = 6270897643;
const muName = "Lila Raju";
console.log(isNaN(myNumber)); // Printing the variable result with isNaN() method to check the result.
console.log(isNaN(muName));
// Note - 1:09:52 hour is a dount I could not understand in thapa technical.
console.log("str".isNaN() === NaN);
