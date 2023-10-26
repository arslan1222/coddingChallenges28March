function manipulateString(inputString) {
    // Convert the input string to uppercase
    const manipulatedString = inputString.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    // Return the callback function
    return logString;
  }
  
  const inputString = "Hello, World!";
  const logCallback = manipulateString(inputString);
  
  // Call the logCallback to log the manipulated string
  logCallback();
  