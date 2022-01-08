const PlanetCard = ({planet}) => {
  return (
    <div>
      <h3>{planet.name}</h3>
      <p>Gravity: {planet.gravity}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
}

export default PlanetCard;
