// Sample list of book objects
const books = [
    { title: "Book C", author: "Author 3", year: 2020 },
    { title: "Book A", author: "Author 1", year: 2018 },
    { title: "Book B", author: "Author 2", year: 2019 },
  ];
  
  // Callback function to log titles in alphabetical order
  function logTitlesInAlphabeticalOrder(titles) {
    titles.sort(); // Sort the titles alphabetically
    console.log("Titles in alphabetical order:");
    titles.forEach(title => {
      console.log(title);
    });
  }
  
  // Function that accepts a list of book objects and a callback function
  function processBooks(books, callback) {
    // Use the map function to create a new list containing only the titles
    const titles = books.map(book => book.title);
    // Call the callback function with the new list of titles
    callback(titles);
  }
  
  processBooks(books, logTitlesInAlphabeticalOrder);
  