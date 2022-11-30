import React, { useState } from "react";

function PlantCard({ plant }) {

  const [stockStatus, setStockStatus] = useState(true)

  function handleStockStatus() {
    setStockStatus(!stockStatus);
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
    </li>
  );
}

export default PlantCard;
