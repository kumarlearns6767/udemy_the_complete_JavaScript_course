"use strict";

// Javascript Arrays.

// What is Javascript Array ?
// JavaScript Array is a single variable that is used to store
// elements of different data types. JavaScript arrays are zero-indexed.
// The Javascript Arrays are not associative in nature.
// Arrays are used when we have a list of items.

// Syntax - 

// let arrayName = [value1, value2, ...];

// using new keyword - 

let arrName = new Array(3);

arrName[0] = 10;
arrName[1] = '12';
arrName[2] = 15;

console.log(`Name of array = ${arrName}`);

// or 

let arrName2 = new Array(12, 15, 'lalu');

console.log(`Name of 2nd array = ${arrName2}`);

// Increase and decrease the length of an array

// We can increase and decrease the length of an array using the Javascript’s length property.

const courses = ["HTML", "CSS", "Javascript"];
courses.length = 5 // Increasing array length to 5
console.log("Array after increased length: ", courses)
courses.length = 2 // Decreasing array length to 2
console.log("Array after decreased length: ", courses)


// Output

// Array after increased length:  [ 'HTML', 'CSS', 'Javascript', <2 empty items> ]
// Array after decreased length:  [ 'HTML', 'CSS' ]

// First element of an array is called Lower Inder or Lower Boundary.
// Last element of an array is called Upper Inder or Upper Boundary.