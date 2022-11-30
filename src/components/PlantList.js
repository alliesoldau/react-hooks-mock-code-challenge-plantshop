import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, handleUpdatedPrice }) {

  // console.log(plantData)
  const plantCards = plantData.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        handleUpdatedPrice={handleUpdatedPrice}
      />
    )
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
