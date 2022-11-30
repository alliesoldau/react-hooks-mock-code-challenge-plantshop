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
      />
    </main>
  );
}

export default PlantPage;
