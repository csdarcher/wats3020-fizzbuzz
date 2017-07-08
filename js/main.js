/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


// Initialize a variable `isInteger` to use as a control value for the
// `while` loop. Set the initial value to `false`.
isInteger = false;

// While loop that will prompt user to enter a number until
while (!isInteger) {
  // Prompt the user for the `maxNumber` value.
  maxNumber = prompt('Enter a number over zero. Your number must be an integer:', 15);
  maxNumber = parseInt(maxNumber); // Covert maxNumber from a string to an integer
  
// Conditional expression that ensures number entered by user is greater than zero and a true integer
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0){ 
    isInteger = true;
} 
  
fbResults = []; // Initialize the `fbResults` variable to an empty Array

for (let i=1; 1 <= maxNumber; i++) { // `for` loop that will execute the `maxNumber` of times.
  
  // Create`for` loop to calculate FizzBuzz.  
  // Store the results of this logic in an array called `fbResults`.
    if (i % 15 == 0) {
      fbResults.push('FizzBuzz!');
    } else if (i % 3 == 0) {
       fbResults.push('Fizz!');
    } else if (i % 5 == 0) {
       fbResults.push('Buzz!');
    } else {
      fbResults.push(i);
    }          

}

// In preparation for creating the output text for FizzBuzz results,
// initialize the `fbText` variable to an empty string.
fbText = '';

// `for ... of` loop to concatenate the values from `fbResults` into the variable `fbText`.
for (let result of fbResults) {
  fbText = fbText + result + "\n";
}


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
