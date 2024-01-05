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

// Method 3 -
//In this method, we select the id present in html, store them in javascript then do some event ction on that id. Example -
