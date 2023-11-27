"use strict";

function multipleCheckReturn() {
	let arr = [2, 3, 4, 6, 8],
		value,
		multiply;
	for (value of arr) {
		multiply = value * 2;
		if (multiply > 10) {
			console.log(`Multiplication of ${value} = ${multiply}`);
		}
	}
}
multipleCheckReturn();
