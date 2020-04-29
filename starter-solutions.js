/**
 * Solution for input box example
 */
const logForm = document.getElementById("loginput"); // Use the method `getElementById` to get a reference to
// the form
logForm.onsubmit = function () {
  // Set the action to be taken when the form is submitted
  const textInput = document.getElementById("loginput-text"); // Get the text from the input box
  console.log(textInput.value); // Log the console
  textInput.value = ""; // Reset the text box
  return false; // Tell the page to not reload
};

/**
 * Full solution for guessing game example
 */
function randomInteger() {
  return Math.floor(Math.random() * 100);
}

function printResponse(message) {
  const responseDiv = document.getElementById("guess-response");
  responseDiv.innerText = message;
}

printResponse("Guess a number from 0-99, inclusive");

// The answer
let rand = randomInteger();

// Get the form element
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");

// Parent div
const guessDiv = document.getElementById("guess");

// Button to restart, hidden for now
const restartButton = document.createElement("button");
restartButton.id = "guess-restart";
restartButton.innerText = "Restart?";

// On button click, generate new number and reset display
restartButton.onclick = function () {
  rand = randomInteger();
  guessInput.value = "";
  printResponse("Waiting for a guess...");

  // Remove the button from the DOM
  guessDiv.removeChild(restartButton);
};

// Tell it what to do when a value is submitted
guessForm.onsubmit = function () {
  if (guessInput.value) {
    const guess = Number(guessInput.value);

    // Basic game logic
    if (isNaN(guess)) {
      printResponse("invalid guess!");
    } else if (guess < rand) {
      printResponse(guess + " is too low");
    } else if (guess > rand) {
      printResponse(guess + " is too high");
    } else {
      printResponse(guess + " is correct!");
      // Add the restart button to the DOM
      guessDiv.appendChild(restartButton);
    }
  }
  // No page refresh
  return false;
};
