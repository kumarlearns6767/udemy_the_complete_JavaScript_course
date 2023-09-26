"use strict";

function leapYear() {
	// Clear any previous error message
	document.getElementById('error-text').innerHTML = "";

	// Clear the result message
	document.getElementById("return-value").innerText = "Your Number is =";

	let year = document.getElementById("yearbyUser").value;
	console.log(`The Year you have entered is = ${year}`);

	if (isNaN(year) || year == "" || year === "") {
		const errorText = document.getElementById('error-text');
		errorText.innerHTML = "Invalid Entry !!!  Please Enter a Number and try Again !";
		document.getElementById("return-value").innerText = "";
		errorText.classList.remove('error-text'); // Remove the class
		setTimeout(() => {
			errorText.classList.add('error-text'); // Add the class to trigger the animation
		}, 0); // Use a small delay to ensure the class is removed and re-added
	} else {
		// if year is divisible by 4 then leap year.
		if (year % 4 === 0) {
			// if year is divisible by 4 then not a leap year.
			if (year % 100 === 0) {
				// if year is divisible by 400 then leap year.
				if (year % 400 === 0) {
					document.getElementById("return-value").innerText = "Your Number is a Leap Year !";
				} else {
					document.getElementById("return-value").innerText = "Your Number is not a Leap Year !";
				}
			} else {
				document.getElementById("return-value").innerText = "Your Number is a Leap Year !";
			}
		} else {
			document.getElementById("return-value").innerText = "Your Number is not a Leap Year !";
		}
	}
}