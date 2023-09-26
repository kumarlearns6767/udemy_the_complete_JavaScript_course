"use strict";

function alphabet() {
    // Clear any previous error message
    document.getElementById('error-text').innerHTML = "";

    // Clear the result message
    document.getElementById("return-value").innerText = "";

    let str = document.getElementById("yearbyUser").value;
    console.log(`The Year you have entered is = ${str}`);

    const errorText = document.getElementById('error-text');

    if (!isNaN(str) || str == "" || str === "") {
        errorText.innerHTML = "Invalid input. Please enter a single alphabet character !!!";
        document.getElementById("return-value").innerText = "";
        errorText.classList.remove('error-text'); // Remove the class
        setTimeout(() => {
            errorText.classList.add('error-text'); // Add the class to trigger the animation
        }, 0); // Use a small delay to ensure the class is removed and re-added
    } else {
        if (str.length === 1 && (str >= 'a' && str <= 'z' || str >= 'A' && str <= 'Z')) {
            document.getElementById("error-text").innerText = ""; // Clear any previous error message
            document.getElementById("return-value").innerText = str + " is an alphabet ";
        } else {
            document.getElementById("return-value").innerText = ""; // Clear any previous result
            document.getElementById("error-text").innerText = "Invalid input. Please enter a single alphabet character !!!";
            errorText.classList.remove('error-text'); // Remove the class
            setTimeout(() => {
                errorText.classList.add('error-text'); // Add the class to trigger the animation
            }, 0);
        }
    }
}