function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Please provide a valid name.");
      }
    });
  }
  
  function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Please provide a valid name.");
      }
    });
  }
  
  
  greetWithPromise("Arslan")
    .then((greeting) => {
      console.log(greeting); // Output: Hello, Mithun!
    })
    .catch((error) => {
      console.error(error);
    });
  
  greetWithPromise("Arslan")
    .then((greeting) => {
      console.log(greeting); // Output: Hello, Mithun!
    })
    .catch((error) => {
      console.error(error);
    });
  