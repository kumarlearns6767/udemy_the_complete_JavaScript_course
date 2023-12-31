"use strict";

// content taken from "chai aur code youtube channel"

// Javascript DOM (Document Object Model) and BOM (Browser Object Model) -

// theory will be applied later on because of time restrictions. Practical excaples -

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
};

execute();
