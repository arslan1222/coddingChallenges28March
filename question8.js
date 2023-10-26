// Define the URL of the API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Use the Fetch API to make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (response.status !== 200) {
      console.error(`Error: ${response.status}`);
      return;
    }

    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Display the retrieved data in the console
    console.log('Retrieved data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
