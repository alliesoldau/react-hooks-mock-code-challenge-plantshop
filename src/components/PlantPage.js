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

  // console.log(plantData)

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList 
        plantData={plantData}
      />
    </main>
  );
}

export default PlantPage;
