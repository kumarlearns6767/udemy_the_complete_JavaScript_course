"use strict";

function squareRoot() {
	let arr = [25, 36, 49, 64, 81];
	let i, square, square2;

	// using for loop-
	for (i = 0; i < arr.length; i++) {
		square = Math.sqrt(arr[i]);
		console.log(`Square Roote of each element in array = ${square}`);
	}
	arr[i];

	console.log("\n\n"); // two new lines

	// using for...in loop-
	for (let index in arr) {
		// console.log(value);
		square2 = Math.sqrt(arr[index]);
		console.log(`Square Roote of each element in array = ${square2}`);
	}
}
squareRoot();
