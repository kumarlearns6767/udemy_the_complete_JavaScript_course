"use strict";

function check() {
	// selecting the ID of that tag then extracting the number from that ID using .value .
	let num = document.getElementById('UserNumber').value;

	// Converting the extracted data to a number using parseInt()
	let number = parseInt(num);

	// printing the converted number to see the value.
	console.log(`The number you have give is = ${number}`);

	//checking the converted value is not a number or a number
	if (isNaN(number)) {
		// checking the input is number or not.
		alert("Please Enter a Number and try again");
	} else { // if the converted number is a number then if will execute this block of code. 
		if (number % 2 == 0) {
			document.getElementById("return-value").innerText = "Your Number is = Even Number";
		} else {
			document.getElementById("return-value").innerText = "Your Number is = Odd Number";
		}
	}
}
