"use strict";

function takearray() {
	let arr = [];
	alert("You are about to give input of elements of an array.");
	for (let i = 0; i < 3; i++) {
		// arr[i] = String(
		// 	prompt(`Please enter the elements of the array one by one = `)
		// ); This way is not efficicent because JS Array are dynamic.
		arr.push(
			String(prompt(`Please enter the elements of the array one by one = `))
		);
	}
	console.log(`the elements of the array are: ${arr}`);
}

takearray();
