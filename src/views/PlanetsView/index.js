import { useEffect, useState } from "react";
import "../../App.css";
import PlanetCard from "./PlanetCard";



const PlanetsView = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);

  return (
    <div className="App">
      <div>
        {planets.map((planet, index) => {
          return <PlanetCard planet={planet} key={index} />;
        })}
      </div>
    </div>
  );
}

export default PlanetsView;
