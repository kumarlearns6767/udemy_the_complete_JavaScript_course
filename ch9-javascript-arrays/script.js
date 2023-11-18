"use strict";

// Javascript Arrays.

// What is Javascript Array ?
// JavaScript Array is a single variable that is used to store
// elements of different data types. JavaScript arrays are zero-indexed.
// The Javascript Arrays are not associative in nature.
// Arrays are used when we have a list of items annd we need to store then in one variable.

// Syntax -

// let arrayName = [value1, value2, ...];

let arrayname = ["name1", "name2", "name3"];

// using new keyword -

// I need to take a deep dive in this concept of array for new keyword because I forgot this everytime.
let arrName = new Array(3);

arrName[0] = 10;
arrName[1] = "12";
arrName[2] = 15;

console.log(`Name of array = ${arrName}`);

// or

let arrName2 = new Array(12, 15, "lalu");

console.log(`Name of 2nd array = ${arrName2}`);

// Interview Question -
// Why Javascript cannot take array input from the user directly?
// Example -
// let arr = [];
// alert("You are about to give input of elements of an array.");
// for (let i = 0; i < 3; i++) {
// 	arr = String(
// 		prompt(`Please enter the elements of the array one by one = `)
// 	);
// 	debugger;
// }
// console.log(`the elements of the array are: ${arr}`);
// Why the above code will take the last value and not input all the elements from the loop in arr[] ?
// Answer -
// It's because Javascript by default cannot take elements input directly. It required push() method tp do so.

// Understanding the basics of array -

let myFriends = ["vinod", "swati", "komal", "raju"]; // declared an array named "myFrineds[]";
// now, the data inside the array are called elements. Which means 'vinod', 'swati' are one single elements.
// The First Element 'vinod' is called Lower Index/Lower Boundary
// And Last Element 'raju' is called Upper Index/Upper Boundary.
// Index in Array starts from 0 so indexof(vinod) is 0.

// to check the length of an array
// We check the length of an array using length() method in javascript. Example -

let enemies = ["poulov", "suman", "sneha", "aslesha", "arg"];

console.log(`Total length of the array is = ${enemies.length}`);

// Increase and decrease the length of an array

// We can increase and decrease the length of an array using the Javascript’s length property.

const courses = ["HTML", "CSS", "Javascript"];
courses.length = 5; // Increasing array length to 5
console.log("Array after increased length: ", courses);
courses.length = 2; // Decreasing array length to 2
console.log("Array after decreased length: ", courses);

// Output

// Array after increased length:  [ 'HTML', 'CSS', 'Javascript', <2 empty items> ]
// Array after decreased length:  [ 'HTML', 'CSS' ]

// to know more visit - https://www.geeksforgeeks.org/javascript-arrays/. (taken from outside source)

// First element of an array is called Lower Inder or Lower Boundary.
// Last element of an array is called Upper Inder or Upper Boundary.

// Array always start eith 0 index.

// Traversal Array -  Instead of having to perform an action for each item in an array individually,
// loops allow us to repeat the action a selected number of times. example -

console.log(`One of my enemy = ${enemies[2]}`);

// Adding elements to the array. Also, adding last element to the array-

enemies.push("abhishek"); // this will add the element to the array.
// This is the same process for adding the last element to the array.

console.log("New array =");
console.log(enemies);
// So, push is used to add the element to the array.

// Adding elements to the start index of the array -

enemies.unshift("rumela ganguli");
console.log("New array =");
console.log(enemies);
// So, unshift is used to add the element at the start index of the array.

// Removing last element from the array -

enemies.pop();
console.log(`New array with last element removed = `);
console.log(enemies);
//  By using pop(), we can remove the last element from the array.

//  Removing the 1st element from the array -
enemies.shift();
console.log(`New array with first element removed =`);
console.log(enemies);
