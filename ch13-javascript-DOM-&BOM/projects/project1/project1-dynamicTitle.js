// This project is taken from Google Bard AI.

// Project 1 -

// Dynamic Title Changer (Easy):

//     HTML: Create a page with a heading and an input field.
//     JavaScript:
//         Access the heading and input field using DOM methods.
//         Change the heading text to the value entered in the input field when the user types.
//         Bonus: Add validation to the input field to ensure valid text is entered before updating the heading.

function changeHeading() {
	setTimeout(() => {
		let userInput = document.getElementById("headingBox").value;
		console.log(userInput);
		document.getElementById("dynamicHead").innerHTML = userInput;
	}, 10);
}

function refreshPage() {
	setTimeout(() => {
		window.location.reload();
	}, 100);
}
