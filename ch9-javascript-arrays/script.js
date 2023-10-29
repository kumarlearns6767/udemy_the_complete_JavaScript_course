"use strict";

// Javascript Arrays.

// What is Javascript Array ?
// JavaScript Array is a single variable that is used to store
// elements of different data types. JavaScript arrays are zero-indexed.
// The Javascript Arrays are not associative in nature.
// Arrays are used when we have a list of items annd we need to store then in one variable.

// Syntax - 

// let arrayName = [value1, value2, ...];

let arrayname = ['name1', 'name2', 'name3'];

// using new keyword - 


// I need to take a deep dive in this concept of array for new keyword because I forgot this everytime.
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

// to know more visit - https://www.geeksforgeeks.org/javascript-arrays/. (taken from outside source)



// First element of an array is called Lower Inder or Lower Boundary.
// Last element of an array is called Upper Inder or Upper Boundary.

// Array always start eith 0 index.


// Traversal Array -  Instead of having to perform an action for each item in an array individually,
// loops allow us to repeat the action a selected number of times. example - 

let enemies = ['poulov', 'suman', 'sneha', 'aslesha', 'arg'];

console.log(`One of my enemy = ${enemies[2]}`);

// to check the length of an array