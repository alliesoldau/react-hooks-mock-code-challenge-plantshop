import React, { useState } from "react";

function PlantCard({ plant }) {

  const [stockStatus, setStockStatus] = useState(true)
  const [newPrice, setNewPrice] = useState(0)

  function handleStockStatus() {
    setStockStatus(!stockStatus);
  }

  function handleNewPrice() {
    const parsedPrice = parseInt(newPrice, 10)
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: parsedPrice
      }),
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <div onClick={handleStockStatus}>
        {stockStatus ? (
          <button className="primary">In Stock</button>
        ) : (
          <button>Out of Stock</button>
        )}
      </div>
      <form onSubmit={handleNewPrice}>
        <h4> Update Price: </h4>
          <input 
            type="number" 
            name="newPrice"
            placeholder="$0"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <input
              type="submit"
              name="submit"
              value="Update Price"
              className="submit"
          />
      </form>
    </li>
  );
}

export default PlantCard;
