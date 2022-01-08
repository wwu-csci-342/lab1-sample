import { useEffect, useState } from "react";
import "./App.css";
import StarshipCard from "./components/StarshipCard";
import PlanetCard from "./components/PlanetCard";

function App() {
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setStarships(data.results));
  }, []);

  const getPlanets = async () => {
    let response = await fetch("https://swapi.dev/api/planets/");
    let jsonData = await response.json();
    setPlanets(jsonData.results);
    setStarships([]);
  };

  const getStarships = async () => {
    let response = await fetch("https://swapi.dev/api/starships/");
    let jsonData = await response.json();
    setStarships(jsonData.results);
    setPlanets([]);
  };

  return (
    <div className="App">
      <div className="Sidebar">
        <p>
          <button onClick={getPlanets} disabled={planets.length}>
            View planets
          </button>
        </p>
        <p>
          <button onClick={getStarships} disabled={starships.length}>
            View starships
          </button>
        </p>
      </div>
      <div>
        {starships.map((starship, index) => {
          return <StarshipCard starship={starship} key={index} />;
        })}
        {planets.map((planet, index) => {
          return <PlanetCard planet={planet} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
