// 1. Import the readline-sync module
const input = require('readline-sync');

// 2. Initialize variables
let password = "";
let isValid = false;

// 3. Start the loop to keep asking until requirements are met
while (!isValid) {
    password = input.question("Please enter a password: ");

    // Reset these flags every time the loop runs for a new attempt
    let hasUppercase = false;
    let hasNumber = false;
    let hasMinimumLength = password.length >= 8;

    // 4. Loop through the string to check each character
    for (let i = 0; i < password.length; i++) {
        let character = password[i];

        // Check if character is a number
        if (!isNaN(character) && character !== " ") {
            hasNumber = true;
        }

        // Check if character is uppercase
        if (character === character.toUpperCase() && character !== character.toLowerCase()) {
            hasUppercase = true;
        }
    }

    // 5. Final validation check
    if (hasMinimumLength && hasUppercase && hasNumber) {
        isValid = true;
        console.log("Success! Your password is valid.");
    } else {
        console.log("Password does not meet the requirements. Please try again.");
        
        // Helpful feedback for the user (Optional but good practice)
        if (!hasMinimumLength) console.log("- Must be at least 8 characters.");
        if (!hasUppercase) console.log("- Must include an uppercase letter.");
        if (!hasNumber) console.log("- Must include a number.");
    }
}
