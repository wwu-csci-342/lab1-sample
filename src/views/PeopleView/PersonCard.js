const PersonCard = ({person}) => {
    return (
      <>
        <h3>{person.name}</h3>
        <p>Birth year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
      </>
    );
  }
  
  export default PersonCard;
  