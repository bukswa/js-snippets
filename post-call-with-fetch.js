const url = "https://api.example.com/data";
const data = { name: "John Doe", age: 30 };

fetch(url, {
  method: "POST", // Specify the request method
  headers: {
    "Content-Type": "application/json", // Specify the content type
    Authorization: "Bearer your-token", // Include any other headers
  },
  body: JSON.stringify(data), // Convert the request body to a JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON response
  })
  .then((responseData) => {
    console.log("Success:", responseData); // Handle the response data
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });
