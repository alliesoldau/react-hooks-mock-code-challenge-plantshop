import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlantData(data))
  }, [])

  function onNewPlantSubmit(newPlant) {
    setPlantData([...plantData, newPlant])
  }

  return (
    <main>
      <NewPlantForm 
        onNewPlantSubmit={onNewPlantSubmit}
      />
      <Search />
      <PlantList 
        plantData={plantData}
      />
    </main>
  );
}

export default PlantPage;
