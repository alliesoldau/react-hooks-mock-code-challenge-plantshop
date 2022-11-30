import React, { useState } from "react";

function NewPlantForm({ onNewPlantSubmit }) {

  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: newPlantName,
      image: newPlantImage,
      price: newPlantPrice,
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then((r) => r.json())
    .then(onNewPlantSubmit)
    setNewPlantName("")
    setNewPlantImage("")
    setNewPlantPrice(0)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={newPlantName}
          onChange={(e) => setNewPlantName(e.target.value)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={newPlantImage}
          onChange={(e) => setNewPlantImage(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={newPlantPrice}
          onChange={(e) => setNewPlantPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
