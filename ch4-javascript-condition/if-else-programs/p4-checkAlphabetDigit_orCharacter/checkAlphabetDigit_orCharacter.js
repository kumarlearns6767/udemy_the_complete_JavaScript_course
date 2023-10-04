'use strict';

// Clear any previous error message
document.getElementById('error-text').innerHTML = "";

// Clear the result message
document.getElementById("return-value").innerText = "";

// Clear the input box
document.getElementById("userInput").value = "";


function check() {
    let userInput = document.getElementById('userInput');
    let inputValue = userInput.value;
    const errorText = document.getElementById('error-text');

    console.log(`You have given "${inputValue}" as user input`);

    if (inputValue == "" || inputValue === "") {
        document.getElementById("return-value").innerText = "";
        document.getElementById("error-text").innerText = "You cannot enter a blank space. Please enter a special character/ number/ alphabet.";
        errorText.classList.remove('error-text'); // Remove the class
        setTimeout(() => {
            errorText.classList.add('error-text'); // Add the class to trigger the animation
        }, 0); // Use a small delay to ensure the class is removed and re-added
    }
    else if (inputValue.length >= 2) {
        document.getElementById("return-value").innerText = "";
        document.getElementById("error-text").innerText = "You cannot enter more than 1 character. Please enter a single character! ";
        errorText.classList.remove('error-text'); // Remove the class
        setTimeout(() => {
            errorText.classList.add('error-text'); // Add the class to trigger the animation
        }, 0); // Use a small delay to ensure the class is removed and re-added
    }
    else {
        if ((inputValue >= 'A' && inputValue <= 'Z') || (inputValue >= 'a' && inputValue <= 'z')) {
            document.getElementById('error-text').innerHTML = "";
            document.getElementById('return-value').innerHTML = "";
            document.getElementById('return-value').innerHTML = "You have entered a Alphabet !";
        }
        else if (inputValue >= 0 || inputValue <= 9) {
            document.getElementById('error-text').innerHTML = "";
            document.getElementById('return-value').innerHTML = "";
            document.getElementById('return-value').innerHTML = "You have entered a Number !";
        }
        else {
            document.getElementById('error-text').innerHTML = "";
            document.getElementById('return-value').innerHTML = "";
            document.getElementById('return-value').innerHTML = "You have entered a Special Charater !";
        }
    }
}