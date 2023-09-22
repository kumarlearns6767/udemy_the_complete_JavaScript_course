"use strict";

function leapYear() {
	let year = document.getElementById("yearbyUser").value;
	console.log(`The Year you have entered is = ${year}`);

	if (isNaN(year)) {
		alert("Please enter a Year as a Number and Try again! ");
	} else {
		// if year is divisible by 4 then leap year.
		if (year % 4 === 0) {
			// if year is divisible by 4 then not a leap year.
			if (year % 100 === 0) {
				// if year is divisible by 400 then leap year.
				if (year % 400 === 0) {
					document.getElementById("yearReturn").innerText = "Your Number is a Leap Year !";
				} else {
					document.getElementById("yearReturn").innerText = "Your Number is not a Leap Year !";
				}
			} else {
				document.getElementById("yearReturn").innerText = "Your Number is a Leap Year !";
			}
		} else {
			document.getElementById("yearReturn").innerText = "Your Number is not a Leap Year !";
		}
	}
}