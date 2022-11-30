import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlantData(data))
  }, [])

  function onNewPlantSubmit(newPlant) {
    setPlantData([...plantData, newPlant])
  }

  function handleOnSearch(e) {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  function handleUpdatedPrice(newPrice) {
    console.log(newPrice.price)
    const updatedPlantPrice = plantData.map((plant) => {
      if (plant.price === newPrice.price) {
        return plant
      } else {
        return newPrice
      }
    })
    setPlantData(updatedPlantPrice)
  }

  function deletePlant(plantRIP) {
    const plantsSansRIPPlant = plantData
    .filter((plant) => plant.id !== plantRIP.id)
    setPlantData(plantsSansRIPPlant);
  }

  const filteredPlants = plantData
    .filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm 
        onNewPlantSubmit={onNewPlantSubmit}
      />
      <Search 
        handleOnSearch={handleOnSearch}
      />
      <PlantList 
        plantData={filteredPlants}
        handleUpdatedPrice={handleUpdatedPrice}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
