import { useEffect, useState } from "react";
import "../../App.css";
import StarshipCard from "./StarshipCard";



const StarshipsView = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setStarships(data.results));
  }, []);

  return (
    <div className="App">
      <div>
        {starships.map((starship, index) => {
          return <StarshipCard starship={starship} key={index} />;
        })}
      </div>
    </div>
  );
}

export default StarshipsView;
