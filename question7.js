async function fetchTodoAndPostData() {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
      ]);
  
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error("Failed to fetch data from one or both endpoints");
      }
  
      const [todoData, postData] = await Promise.all([todoResponse.json(), postResponse.json()]);
  
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      console.log(combinedData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  fetchTodoAndPostData();
  