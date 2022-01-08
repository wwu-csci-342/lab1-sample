import { useEffect, useState } from "react";
import "../../App.css";
import PersonCard from "./PersonCard";



const PeopleView = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, []);

  return (
    <div className="App">
      <div>
        {people.map((person, index) => {
          return <PersonCard person={person} key={index} />;
        })}
      </div>
    </div>
  );
}

export default PeopleView;
