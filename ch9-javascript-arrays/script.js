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
// By using shift(), we can remove the first element from the array.

// to check if the variable data type is array or not -
console.log(Array.isArray(enemies));

// Exact words from string as an array -
let newString = "This is a string going to be convered.";
let extractedArray = newString.split(" "); // We removed the spaces from the string and extracted the remaning words as array.
console.log(extractedArray);

// Now, extracting words using a single character-
let newArray2 = newString.split("s");
console.log(newArray2);

// ****** Multi Dimensional Array ******
// There are multi-dimensional arrays in Javascript. A multidimensional array is an array of arrays. Multidimensional arrays are useful when you want to store data as a tabular form, like a table with rows and columns.

// This is how multi-dimensional array is created in javascript -

let usersInfo = [
	[
		"Sneha",
		"Shreya",
		"Arup",
		"Priyanka",
		"Vinit",
		"Vanshika",
		"Olyvia",
		["chatterjee", "bogopaddhayai", "grop", "singh", "verma", "Cornelo"],
	],
	[true, false, true, true, false, true, false, true],
	[21, 29, 26, 23, 25, 19, 24],
];
// In th main array, 1st array contains user names,
// 2nd array contains is user is logged in? true or false,
// 3rd array contains user age.

// Accessing the multi-dimensional array -

const surName = usersInfo[0][1][0];
console.log(`Surname = ${surName}`);

let i, j, k;
for (i = 0; i < usersInfo.length; i++) {
	// let count = 0;
	2; // count++;
	console.log(`Main external Array = ${usersInfo[i]}`);
	for (j = 0; j <= usersInfo.length; j++) {
		console.log(`2nd external Array = ${usersInfo[i][j]}`);
	}
}
// Output is not as expected. Will troubleshoot later.

// Challange time-
// Add 'Dec'at the end of an array, then what is the return value of "splice method?", then update 'march' to 'March' and Delete 'June' from that array.
// here is the array = months = [Jan, Mar, Apr, Jun, Jul,].

const months = ["Jan", "Mar", "Apr", "Jun", "Jul"];
months.splice(5, 0, "Dec");
console.log(months);
months.splice(1, 1, "March");
console.log(months);
months.splice(3, 1);
console.log(months);

// indexOf method -
// This method is used to find the index of a string or element in the array.
// Example -

// Searching for a substring in a string: You can use indexOf() to find the first occurrence of a substring within a string. For example, the following code finds the first occurrence of the substring "world" in the string "Hello, world!":

const str2 = "Hello, world!";
const indexx = str2.indexOf("world");
console.log(indexx); // Output: 7

//     Checking if a value exists in an array: You can use indexOf() to check if a value exists in an array. If the value is found, indexOf() will return the index of the first occurrence of the value. If the value is not found, indexOf() will return -1. For example, the following code checks if the number 3 exists in the array [1, 2, 3, 4, 5]:

const numbers = [1, 2, 3, 4, 5];
const indexx2 = numbers.indexOf(3);
console.log(indexx2); // Output: 2

// Finding the position of a character in a string: You can use indexOf() to find the position of a character in a string. For example, the following code finds the position of the first occurrence of the character 'l' in the string "Hello":

const str = "Hello";
const index = str.indexOf("l");
console.log(index); // Output: 2

// Check programs folders for chalenge.

// Callback functions for forEach() -
// A callback function in programming is a function that is passed as an argument to another function, and it is intended to be executed after a specific task or event occurs. It's a way to provide a piece of code (the callback) that will be called back later, often asynchronously.

// In simpler terms, imagine you're asking someone to do a task for you, and you provide them with specific instructions on what to do once they finish. In programming, the task is an operation or an event, and the instructions are the callback function.

// Here's a basic example in JavaScript:

function performTask(task, callback) {
	// Perform the task
	console.log("Performing task: " + task);

	// After the task is done, execute the callback
	callback();
}

// Define a callback function
function callbackFunction() {
	console.log("Task completed!");
}

// Use performTask with the callback
performTask("A", callbackFunction);

// In this example:

//     performTask is a function that takes a task and a callback function as parameters.
//     It performs the specified task (in this case, just logging a message) and then calls the provided callback function.

// The callbackFunction is the callback passed to performTask. It gets executed after the task is completed.

// This pattern is commonly used in scenarios like asynchronous operations, event handling, and functions that require some time to complete. The callback allows you to specify what should happen next once a particular task or event is finished.
