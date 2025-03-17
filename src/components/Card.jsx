import "../styles/card.css";

function Card({ pokemon, handleGuess }) {
  return (
    <div
      className="card-container"
      data-poke-id={pokemon.id}
      onClick={handleGuess}
    >
      <img className="card-sprite" src={pokemon.sprite} alt={pokemon.name} />
      <h3 className="card-title">{pokemon.name}</h3>
    </div>
  );
}

export default Card;
