"use strict";

// content taken from "chai aur code youtube channel"

// Javascript DOM (Document Object Model) and BOM (Browser Object Model) -

// theory will be applied later on because of time restrictions. Practical excaples -

// content taken from - https://www.youtube.com/watch?v=b1JpH4dz4SQ&list=PLMMMqnAjMvAX9nCd85ePmuQVWkIbjSc5i&index=10  GeekStack youtube channel. Video name - "JavaScript DOM Full Course | Document Object Model JavaScript Complete Course"

const execute = () => {
	// What is a window object?
	// The Window object represents a the browser window (commonly know as browser tab) All global javascript objects, functions and variables automatically becomes member of window object.Global variables are properties of the window object. Global functions are methods of the window object.

	// What do we see if we print window opject with a delay of 2 seconds ? -

	setTimeout(() => {
		console.log(window);
	}, 2000);
	// we see that there are multiple objects displayed in the console which says manythings about that specific window. We later use that information based on our requirements.

	// In the above example, we retrived windows object but how we can retrive/pull out document object from windows? Well, here an example -

	setTimeout(() => {
		console.log(`\n${window.document}`);
	}, 2099);
	// The above example demostrates how document object can be retrived from windows object. It can also be done without writing "windows.".

	// Let's understand HTML dom with the below diagram :
	// please click on html dom image in this folder and see the image.

	// manupulating the DOM -

	// Selecting Elements -

	// 1) Selecting element's ID bu getElementById() -
	//  The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

	// Example-
	let sampleText2 = document.getElementById("sText2"); // selectedthe entire "sText2" id.

	sampleText2.innerHTML = "replaced Text 2"; // replaced the text inside "sText2";

	// 2) Selecting element's class by getElementByClassName() -
	//  The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s). When called on the document object, the complete document is searched, including the root node.

	// Example-
	let sampleText3 = document.getElementsByClassName("sText3")[0]; // selectedthe entire "sText3" id.

	sampleText3.innerHTML = "replaced Text 3"; // replaced the text inside "sText3";

	// 3) Selecting element's both class and id or class or id by querySelector() -
	// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

	// Example-
	let sampleText6 = document.querySelector("#sText6"); // selectedthe entire "sText6" id.

	sampleText6.innerHTML = "replaced Text 3"; // replaced the text inside "sText6";
	sampleText6.style.color = "red";

	// 4) Selecting element's name by getElememtsByName() -
	// The getElementsByName() method returns a collection of all elements in the document with the specified name (the value of the name attribute), as a NodeList object. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.

	// Example-
	let sampleText7 = document.querySelector("#sText6"); // selectedthe entire "sText6" id.

	sampleText6.innerHTML = "replaced Text 3"; // replaced the text inside "sText6";
	sampleText6.style.color = "red";
};

execute();
