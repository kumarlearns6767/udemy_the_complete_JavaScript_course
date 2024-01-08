"use strict";

// WHAT IS EVENTS IN JAVASCRIPT?
// Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

// For example:

//     The user selects, clicks, or hovers the cursor over a certain element.
//     The user chooses a key on the keyboard.
//     The user resizes or closes the browser window.
//     A web page finishes loading.
//     A form is submitted.
//     A video is played, paused, or ends.
//     An error occurs.

// You can gather from this (and from glancing at the MDN event reference) that there are a lot of events that can be fired.

// To react to an event, you attach an event handler to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler. Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

// The above defination is taken from MDN Docs.

// The are 4 ways to write events in Javascript -

// 1) Method 1-
// calling functions like alert() or user denifed function which is linked to html as inline. Example -

// see index.html of ch14 -  events line no 37.

// Method 2-
// by calling functtion written in javascript. Example -

const calledFunction = () => {
	alert(
		` This is 2nd method in which I am called and my name is "calledDunction"`
	);
};
// Now this function is called in html onclick attribute when the user clicks on the button.
// Method 2 is not suitable approach because when application i amde scalable in pure javascript, it creates a lot of problems.

// Method 3 -
//In this method, we select the id present in html, store them in javascript then do some event ction on that id. Example -

// At first we select then store the id below -

const medthod3id = document.querySelector("#method3");

medthod3id.onclick = () => {
	alert(
		"This event is fired by selecting html id and applying onclick event of it"
	);
};

// The problem comees with Method 3 is that it overwrites the current code and does not execute the code written before the last code. Example -

medthod3id.onclick = () => {
	console.log(
		"This event is fired by selecting html id and applying onclick event of it"
	);
};

// Check the console output, you will see the alert() is not executed but the last code of method 3 "console.log" is executed. So this is not idea for situation where we need to execute multiple code on single event click.
// This method is also not suitable because onlick come with limited functionality and does not retuen many information which is required for working with advanced applications.

// Method 4 -
// We can use event listner like addEvetListener() to lstner the event and when the event is fired, it calls a call back function to execute it's intended code. Example -

const method4id = document.querySelector(`#method4`);

method4id.addEventListener(
	"click",
	() => {
		alert(" Hello, I am called using addEventListner()");
	},
	false
);

// The Method 3 problem is solved by Method 4 so this is idea for the above situation showed in Method 3.

// Method 4 is the ideal method as it come with more functionality and is suitable for sca;able applications amde in pure / vanilla javascript.

// ****** Taken from Chai ur Code YouTube Channel ******
// We need to learn the following onbects return by addEventListener() when a event is triggered -
// type, timestamp, defaultPrevented,
// target, toElement, srcRlement (very immportant), currentTarget,
// clientX, clientY, screenY,
// altKey, ctrlKey, shiftKey, keyCode

// Event Propogation / Bubbling (very immportant) -
// Event Propogation / Bubbling means that when the element is clicked then the events present on that element including any parent element's elements are executed in inner to outher format. Which means the child element's event will trigger first then the parent's avant will trigger. Example -

document.querySelector("#eventBubble").addEventListener(
	"click",
	() => {
		console.log(" This is inner element's event triggered");
	},
	false
);

document.querySelector(".stopBubblingContainer").addEventListener(
	"click",
	() => {
		console.log(" This is parent element's event triggered");
	},
	false
);
// this is the demo of inner to outer execution which is event propogation.

// Demo of stopping the above event propagation -

document.querySelector("#stopPropagation").addEventListener(
	"click",
	(e) => {
		console.log(" This is inner element's event triggered");
		e.stopPropagation(); // we stopped event propogation here.
	},
	false
);

document.querySelector(".stopBubblingContainer2").addEventListener(
	"click",
	(e) => {
		console.log(" This is parent element's event triggered");
	},
	false
);

// Removing Element on click event -
// When we want to remove element when a click event is detected we can use the normal ID/Class method but this is not ideal when we have many images (more than 20). So, we are using a better approach below -

// Removing a single image when they are clicked -
document.querySelector("#imageContainer").addEventListener(
	"click",
	(event) => {
		console.log(`Captured Event = ${event}`);
		console.log(`Event's target = ${event.target}`);
		if (event.target.tagName == "IMG") {
			console.log(event.target.id);
			let liParentElement = event.target.parentNode;
			liParentElement.remove(); // new  method (not common)
			// liParentElement.parentNode.removeChild(liParentElement); // old method (common)
		} // if condition is added to prevent entire list item from deleting which is a unexpected bug.
	},
	false
);

// Removing all the images with delete all button -
document.querySelector("#deletebtn").addEventListener("click", () => {
	const imageContainer = document.querySelector("#imageContainer");
	const images = imageContainer.querySelectorAll("img");

	images.forEach((image) => {
		image.parentElement.remove(); // Remove the entire <li> element containing the image
	});
});

// Removing single image with delete button -

document.querySelector("#imageContainer2").addEventListener(
	"click",
	(event) => {
		console.log(event.target); // to displat from which target the event is occouring.
		console.log(event.target.parentNode); // to display the parent element of the evented target.
		const removeElement = event.target.parentNode; // Find the closest <li> ancestor
		removeElement.remove(); // Remove the entire <li> element
	},
	false
);

// ****** Returned to Thapa Technical Youtube Channel ******

// Event Object -
// What is Event Object?
// Event objects are small details which are used to gather information about that event.
