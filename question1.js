function doubleWithCallback(arr, callback) {
  
    
    if (!Array.isArray(arr) || typeof callback !== 'function') {
      throw new Error('Invalid input. Please provide an array of integers and a callback function.');
    }
  
    // Create a new array to store the doubled values
    const doubledArray = arr.map(callback);
  
    return doubledArray;
  }
  
  // Example callback function to double a number
  function doubleNumber(num) {
    return num * 2;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const doubledResult = doubleWithCallback(inputArray, doubleNumber);
  console.log(doubledResult); // Output: [2, 4, 6, 8, 10]
  