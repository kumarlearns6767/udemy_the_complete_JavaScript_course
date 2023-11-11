"use strict";

// ********* --------- Loops Starts --------- ***********

// *** for loop ***
// A for loop repeats until a specified condition
// evaluates to false. The JavaScript for loop is
// similar to the Java and C for loop.
// A for statement looks as follows: js Copy to
// Clipboard for (initialization; condition;
// afterthought) statement.

// Example -
// Print the table of 8 using for loop -

let k;
console.log(`\n Table of 8 =`);
for (k = 0; k < 11; k++) {
	let n = k * 8;
	console.log(`8 x ${k} = ${n}`);
	n++;
}

// *** While Loop ***
// The while statement creates a loop that executes a specified statement as long as
// the test condition evaluates to true.
// The condition is evaluated before executing the statement.

// Example -

let digit = 0;

while (digit <= 10) {
	console.log("number = " + digit);
	digit++;
}

console.log("\n\n");

// *** Do While Loop ***
// The do...while statement creates a loop that executes a
// specified statement until the test condition evaluates to false.
// The condition is evaluated after executing the statement,
//  in the specified statement executing at least once.

// Example -

let digit2 = 0;
// debugger;
do {
	console.log(`2number = ${digit2}`);
	digit2++;
} while (digit2 <= 10);

let i = 7;
while (i <= 10) {
	// debugger;
	console.log(`i = ${i}`);
	i++;
}

// *** for ... in Loop ***
// JavaScript for-in loop is used to iterate/loop over the properties of an object. JavaScript for-in loop iterates only over those keys of an object which have their enumerable property set to “true”. The key values in an object have four attributes (value, writable, enumerable, and configurable).

// JavaScript for-in loop are mainly used on objects not on arrays and it returns index numbers rather than values of an array.

// Example -

// here we are javascript objects whoch we have not read till now, so please read about objects in google before understanding for...in loop.

const courses = ["lalu", "raju", "shetal", "dino", "bipasha"];

for (let element in courses) {
	console.log(courses[element]); // to print the values inside the array.
}

for (let element in courses) {
	console.log(element); // to print the index of elemets inside the array.
}

for (let element in courses) {
	console.log(element[courses]); // this will throw undefined.
}

console.log("\n\n");

// now trying with objects -

const courses2 = {
	firstCourse: "JavaScript",
	secondCourse: "React",
	thirdCourse: "Angular",
	fourthcourse: {
		comp: "react.js",
		science: "physics",
		lab: "chemistry:",
	},
};

for (let key in courses2) {
	console.log(key); // to print the name or key of the object 'courses2'.
}

for (let key in courses2) {
	console.log(courses2); // This will print the key and their properties of the object 'courses2'.
}

for (let key in courses2) {
	console.log(key[courses2]); // This will print undefined.
}

for (let key in courses2) {
	console.log(courses2[key]); // This will print the properties / values of the key in the onject 'courses2'.
}

for (let key in courses2) {
	console.log(courses2.fourthcourse[key]); // This will print the properties / values of the key in the onject 'courses2'.
}

// *** for ... of Loop ***
// A for...of loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.
// for ... of Loop is mainly used on arrays rather than objects and it returns the actual value of an array. For example,

const bikes = {
	honda: "cbr650r",
	kawasaki: "ninja 650",
	bmw: "g310rr",
	tvs: "apache rr310",
	tvs: "apache rtr310",
};

for (let keys of bikes) {
	console.log(bikes);
}
