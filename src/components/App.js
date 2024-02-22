import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Set state with the fetched data
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div>
      {dogImage ? (
        // Display the dog image when available
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        // Display "Loading..." while waiting for the response
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
