"use strict";

// Write a Program in Javascript to check that weather a single character is Alphabet or not using Parameterized Function.

let userinput = document.getElementById("UserInput"); // Selecting User Input Input box
userinput.value = ""; // Selecting the inputbox value and making it to Null / ""

let errorText = document.getElementById("error-text");
errorText.innerHTML = "";
let resultMessage = document.getElementById("resultMessage");
resultMessage.innerHTML = "";

function checkAlphabet() {
    debugger;
    if (userinput.value === "") {
        errorText.innerHTML = "Entry cannot be empty. Please enter a character! and try again ";
    }
    else if (userinput.value.length !== 1) {
        resultMessage.innerHTML = "";
        errorText.innerHTML = "Please enter a Single Character and try again !";
    } else if ((userinput.value >= 'a' || userinput.value <= 'z') || (userinput.value >= 'A' || userinput.value <= 'Z')) {
        errorText.innerHTML = "";
        resultMessage.innerHTML = "You have entered a Alphabet !";

    } else {
        resultMessage.innerHTML = "";
        errorText.innerHTML = "Invalid Entry! Please try again !";
    }
}