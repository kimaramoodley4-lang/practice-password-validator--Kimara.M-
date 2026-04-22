# practice-password-validator--Kimara.M-
# Practice: Password Validator

A simple JavaScript command-line application built to demonstrate the use of loops, conditional logic, and user input validation.

## Project Goal
The goal of this project was to create a program that prompts a user for a password and ensures it meets specific security criteria before accepting it.

## Requirements
The program validates the following:
* **Length:** Must be at least 8 characters long.
* **Casing:** Must contain at least one uppercase letter.
* **Numbers:** Must contain at least one number.

## Technical Skills Used
* **Loops:** Utilized a `while` loop to repeatedly prompt the user until a valid password was provided.
* **Iteration:** Used a `for` loop to iterate through the string and check individual characters.
* **Input Handling:** Implemented the `readline-sync` library to capture user input in the terminal.
* **Logic:** Applied boolean flags to track whether specific requirements were met during the validation process.

## Setup
To run this project locally:
1. Clone the repository.
2. Install dependencies using:
   ```bash
   npm install readline-sync
