"use strict";

const number = parseInt(prompt("Please Enter a Number = "));
if (isNaN(number)) {
	// checking the input is number or not.
	alert("Please Enter a Number and try again");
} else {
	if (number % 2 == 0) {
		alert(`${number} is Even Number. `);
	} else {
		alert(`${number} is Odd Number. `);
	}
}
