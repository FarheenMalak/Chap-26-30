// 1
let positiveNumber = parseFloat(prompt("Enter a positive integer:"));
document.write("Number: " + positiveNumber + "<br>");
document.write("Round off value: " + Math.round(positiveNumber) + "<br>");
document.write("Floor value: " + Math.floor(positiveNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveNumber) + "<br>");

// 2
let negativeNumber = parseFloat(prompt("Enter a negative floating point number:"));
document.write("Number: " + negativeNumber + "<br>");
document.write("Round off value: " + Math.round(negativeNumber) + "<br>");
document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br>");

// 3
let number = parseFloat(prompt("Enter a number to find its absolute value:"));
let absoluteValue = Math.abs(number);
document.write("The absolute value of " + number + " is: " + absoluteValue + "<br>");

// 4
let diceValue = Math.floor(Math.random() * 6) + 1;
document.write("You rolled a dice and got: " + diceValue);

// 5
let toss = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("The result of the coin toss is: " + toss);

// 6
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("A random number between 1 and 100 is: " + randomNumber);

// 7
let weight = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
let parsedWeight = parseFloat(weight);
document.write("Your weight is: " + parsedWeight + " kilograms.");

// 8
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert("Sorry, the correct number was " + secretNumber + ".");
}
