"use strict";

alert(
	" Chapter 4 page is incomplete so please do not click \n on any of the program links as it may not work as expected. \n the Issue willbe fixed when lalit lands a job."
);
// Conditional statements in Javascript -
// Javascript has if-else, if, if-elseif-else conditional statements. Let's understand them with examples-

// if conditional statements in Javascript -
let namee = "shyam";

if (namee === "shyam") console.log("The Name is " + namee);

// if conditional statements in Javascript check weather the conidtion satisfies or not. If
// that condition is valid then it executes the instruction written in it's block else it
// does not execustes the instructions and moves on to the next code.

// if-else conditional statements in Javascript -
let weather = "rain";
if (weather == "rainy") {
	console.log(`today's weather is ${weather}`);
} else {
	console.log(`today's weather is not rainy`);
}

// Everything is same with if-else except one factor -
// it executes the else block instead of moving to the next code when if condition does
// not satiesfies.

// if-elseif-else conditional statements in Javascript -

const nam = "duckduck";

if (nam == "duckduck") {
	console.log("Duckduck go is valid");
} else if (nam == 12) {
	console.log("today tempurature is 12 degree");
} else if (nam == "15 sun") {
	console.log("total 15 suns are there in milkyway");
} else {
	console.log("condition is not satisfied");
}
// in this statement, if the 1st condition is not valid then it goes to else if contions and if that if invalid then
// it goes to next else if condition (if that is present) else if goes to else statement and
// executes that block.

// What is truthy anf falsy values in Javascript?
// answer: Values that are coerced into true are called truthy and values that are coerced into false are called falsy.

// Falsy values - 0, "", undefined, null, NaN, falsee** .
// If any of the above falsy values are passed then it returns false.

// --- MOST IMPORTANT ---

// Ternary Operator (which i did not understand in Java).
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ),
// then an expression to execute if the condition is truthy followed by a colon ( : ),
// and finally the expression to execute if the condition is falsy.

// Example -

const re = "raju";
console.log(re === "lila" ? "Invalid Input" : "Valid Input");
// printing (write the condition) ? if true? then execute this block : else do this.

// switch case skipped for time limitations.

// ********* --------- Loops Starts --------- ***********

// *** While Loop ***
// The while statement creates a loop that executes a specified statement as long as
// the test condition evaluates to true.
// The condition is evaluated before executing the statement.

// Example -

let i, j, l;
