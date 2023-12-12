"use strict";

// ********* --------- Loops Starts --------- ***********

console.log(" for() loop - ");
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

console.log("\n\n");
console.log(" while() loop - ");

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
console.log(" do...while() loop - ");

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

console.log("\n Example with while() loop-");
let i = 7;
while (i <= 10) {
	// debugger;
	console.log(`i = ${i}`);
	i++;
}

console.log("\n\n");
console.log(" for...in loop - ");

// *** for ... in Loop ***
// JavaScript for-in loop is used to iterate/loop over the properties of an object. JavaScript for-in loop iterates only over those keys of an object which have their enumerable property set to “true”. The key values in an object have four attributes (value, writable, enumerable, and configurable).

// JavaScript for-in loop are mainly used on objects not on arrays and it returns index numbers rather than values of an array.

// Example -

// here we are javascript objects whoch we have not read till now, so please read about objects in google before understanding for...in loop.

console.log(" for...in loop with array - ");

const courses = ["lalu", "raju", "shetal", "dino", "bipasha"];

for (let element in courses) {
	console.log(courses[element]); // to print the values inside the array.
}
console.log("The above prints values inside the array.");

console.log("\n");
for (let element in courses) {
	console.log(element); // to print the index of elemets inside the array.
}
console.log("The above prints indexes of the array.");

console.log("\n");
for (let element in courses) {
	console.log(element[courses]); // this will throw undefined.
}
console.log("The above will return undefined.");

console.log("\n\n");

// now trying with objects -
console.log(" for...in loop with objects - ");

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

console.log("\n\n\n");

// *** for ... of Loop ***
// A for...of loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.

// for ... of Loop is mainly used on arrays rather than objects and it returns the actual value of an array. For example,

// Applying for...of Loop of Array -

// Declaring an array for example -
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// printing all numbers using for loop.
for (let s = 1; s <= 11; s++) {
	console.log(`The value of number array = ${s}`);
}

// Creating 3 new lines
console.log("\n\n\n");

// printing all numbers using for...of loop.
for (let value of numbers) {
	console.log(`The value of number array using for...of loop = ${value}`);
}

// Applying for...of loop on object-
console.log("\n\n ");
// Applying for...of loop on object -

// creating an object =
const myObject = {
	game1: "NFS",
	game2: "GTA5",
	game3: "Spiderman3",
	game4: "Asphalt Nitro",
	game5: "Dota2",
	game6: "Valorant",
};

// for (const value of myObject) {
// 	console.log(`Value = ${value}`);
// }

// as we can see that the object is not iterable using for...of loop in the avove and below example

// Trying to access key value pairs of the object -

// for (const [key, value] of myObject) {
// 	console.log(key, value);
// } This is commented because after throwing error, it does not print/executes the next line of code.

// *** Javascript Arrray of Objects ***

// What is Javascript Objects ?

// In JavaScript, an onject is standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

const books = [
	{
		id: "9781593275846",
		title: "Eloquent JavaScript, Second Edition",
		subtitle: "A Modern Introduction to Programming",
		author: "Marijn Haverbeke",
		published: "2014-12-14T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 472,
		description:
			"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
		website: "http://eloquentjavascript.net/",
	},
	{
		id: "9781449331818",
		title: "Learning JavaScript Design Patterns",
		subtitle: "A JavaScript and jQuery Developer's Guide",
		author: "Addy Osmani",
		published: "2012-07-01T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
		website:
			"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
	},
	{
		id: "9781449365035",
		title: "Speaking JavaScript",
		subtitle: "An In-Depth Guide for Programmers",
		author: "Axel Rauschmayer",
		published: "2014-02-01T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 460,
		description:
			"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
		website: "http://speakingjs.com/",
	},
	{
		id: "9781491950296",
		title: "Programming JavaScript Applications",
		subtitle:
			"Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
		author: "Eric Elliott",
		published: "2014-07-01T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
		website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html",
	},
	{
		id: "9781593277574",
		title: "Understanding ECMAScript 6",
		subtitle: "The Definitive Guide for JavaScript Developers",
		author: "Nicholas C. Zakas",
		published: "2016-09-03T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 352,
		description:
			"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
		website: "https://leanpub.com/understandinges6/read",
	},
	{
		id: "9781491904244",
		title: "You Don't Know JS",
		subtitle: "ES6 & Beyond",
		author: "Kyle Simpson",
		published: "2015-12-27T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 278,
		description:
			'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
		website:
			"https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond",
	},
	{
		id: "9781449325862",
		title: "Git Pocket Guide",
		subtitle: "A Working Introduction",
		author: "Richard E. Silverman",
		published: "2013-08-02T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 234,
		description:
			"This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
		website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html",
	},
	{
		id: "9781449337711",
		title: "Designing Evolvable Web APIs with ASP.NET",
		subtitle: "Harnessing the Power of the Web",
		author: "Glenn Block, et al.",
		published: "2014-04-07T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 538,
		description:
			"Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
		website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html",
	},
];

console.log(books); // printing the books.

// Now, we will learn Javascript Methods form arrays and objects -

console.log("\n\n Javascript Methods arrays and objects -");

// Javascript filter() method -

let published = books.filter(
	(bookData) => bookData.publisher === "O'Reilly Media"
);

console.log("Book Publisher =", published);

// Javascript filter method practise scanario based problems -

// Easy Questions :

// 1) Filter Books Published by a Specific Publisher:
// Filter the books that are published by "O'Reilly Media."

// Answer -
console.log("\n\n\n 1) Books that are published by O'Reilly Media are = ");

let publisher = books.filter((item) => {
	if (item.publisher === "O'Reilly Media") {
		return item.publisher;
	}
});

console.log(publisher);

// 2) Filter Books Published After a Certain Year:
// Filter the books that were published after the year 2015.

// Answer -
console.log("\n\n\n 1) Books that are published after 2015 = ");

const after2015 = books.filter((item) => {
	const date = new Date(item.published);
	const year = date.getFullYear();
	return year > 2015;
});

console.log(after2015);

// Medium:

// 3) Filter Books with a Certain Keyword in the Description:
// Filter the books that have the word "JavaScript" in their description.

// Answer -
console.log("\n\n\n 1) Books that have Jacascript in their description = ");

const keyword = "JavaScript";

const booksWithJavaScript = books.filter((book) => {
	// Convert both the description and the keyword to lowercase for case-insensitive comparison
	const lowercasedDescription = book.description.toLowerCase();
	const lowercasedKeyword = keyword.toLowerCase();

	// Check if the lowercased description includes the lowercased keyword
	return lowercasedDescription.includes(lowercasedKeyword);
});

console.log(booksWithJavaScript);
