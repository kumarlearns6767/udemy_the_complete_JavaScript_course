"use strict";

function check() {
	// Clear any previous error message
	document.getElementById('error-text').innerHTML = "";

	// Clear the result message
	document.getElementById("return-value").innerText = "Your Number is =";

	// selecting the ID of that tag then extracting the number from that ID using .value .
	let num = document.getElementById('yearbyUser').value;
	console.log(num);
	if (isNaN(num)) {
		const errorText = document.getElementById('error-text');
		errorText.innerHTML = "Invalid Entry !!!  Please Enter a Number and try Again !";
		document.getElementById("return-value").innerText = "";
		errorText.classList.remove('error-text'); // Remove the class
		setTimeout(() => {
			errorText.classList.add('error-text'); // Add the class to trigger the animation
		}, 0); // Use a small delay to ensure the class is removed and re-added
	}
	else {
		// Converting the extracted data to a number using parseInt()
		let number = parseInt(num);

		// printing the converted number to see the value.
		console.log(`The number you have give is = ${number}`);

		// if the converted number is a number then if will execute this block of code. 
		if (number % 2 == 0) {
			document.getElementById("return-value").innerText = "Your Number is = Even Number";
		} else {
			document.getElementById("return-value").innerText = "Your Number is = Odd Number";
		}
	}
}

