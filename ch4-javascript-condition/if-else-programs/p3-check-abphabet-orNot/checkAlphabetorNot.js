"use strict";

function alphabet() {
    // Clear any previous error message
    document.getElementById('error-text').innerHTML = "";

    // Clear the result message
    document.getElementById("return-value").innerText = "Your Number is =";

    let str = document.getElementById("yearbyUser").value;
    console.log(`The Year you have entered is = ${str}`);

    if (!isNaN(str) || str == "" || str === "") {
        const errorText = document.getElementById('error-text');
        errorText.innerHTML = "Invalid Entry !!!  Please Enter a Number and try Again !";
        document.getElementById("return-value").innerText = "";
        errorText.classList.remove('error-text'); // Remove the class
        setTimeout(() => {
            errorText.classList.add('error-text'); // Add the class to trigger the animation
        }, 0); // Use a small delay to ensure the class is removed and re-added
    } else {

    }
}