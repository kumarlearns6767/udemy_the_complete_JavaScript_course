"use strict";

const year = parseInt(prompt("Enter any Year as Number: "));

if (isNaN(year)) {
	alert("Please enter a Year as a Number and Try again! ");
} else {
	if (year % 4 === 0) {
		// if year is divisible by 4 then leap year.
		if (year % 100 === 0) {
			// if year is divisible by 4 then not a leap year.
			if (year % 400 === 0) {
				// if year is divisible by 400 then leap year.
				alert(`${year} is a Leap Year`);
			} else {
				alert(`${year} is a not a Leap Year`);
			}
		} else {
			alert(`${year} is a Leap Year !`);
		}
	} else {
		alert(`${year} is a not a leap year`);
	}
}
