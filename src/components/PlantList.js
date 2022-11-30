import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, handleUpdatedPrice, deletePlant={deletePlant} }) {

  // console.log(plantData)
  const plantCards = plantData.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        handleUpdatedPrice={handleUpdatedPrice}
        deletePlant={deletePlant}
      />
    )
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
