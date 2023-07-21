// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  // State for storing the dog image URL
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch data from the API inside the useEffect hook
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update the state with the new dog image URL
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
      });
  }, []); // The empty array ensures that this useEffect runs only once when the component mounts

  return (
    <div>
      {/* Conditional rendering based on whether dogImage state has been set */}
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
