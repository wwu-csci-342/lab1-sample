const StarshipCard = ({starship}) => {
  return (
    <div>
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
    </div>
  );
}

export default StarshipCard;
