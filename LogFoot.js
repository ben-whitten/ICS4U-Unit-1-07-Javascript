/*
* The logFoot program implements an application that takes the length
* and the width of a logfoot from the user and calculates the height.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-11-30 
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/

// Defining prompt for getting user input.
const prompt = require('prompt-sync')({sigint: true});

// Defining the constant logFoot fro later.
const logFoot = 144;

/**
 * The function calculates the height.
 */
function calculations(length, width) {
  var height = logFoot / (length * width);

  // Returning the height.
  return height;
}

try {
  // Input for the width of the logFoot.
  var width = prompt("Insert the width (in inches) of the log foot: ");

  // Input for the length of the logFoot.
  console.log();
  var length = prompt("Insert the length (in inches) of the log foot: ");

  // Ensuring that the variables are integers.
  length = Number(length, 10);
  width = Number(width, 10);

  // Process
  if (isNaN(length) == true || isNaN(width) == true) {
    // Making sure length and width are intergers.
    console.log();
    console.log("ERROR: Length and width cannot be string");
  } else if ((length <= 0) || (width <= 0)){
    console.log();
    console.log("ERROR: Length and width cannot be less than or equal to 0");
  } else {
    var height = calculations(length, width);
    // Outputs the height. 
    console.log();
    console.log("The height of the log foot is: ", height, " inches");
  }
  
} catch (err) {
  console.log();
  console.log("ERROR: Invalid Input");
}
