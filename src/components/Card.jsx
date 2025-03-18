import "../styles/card.css";

function Card({ pokemon, handleGuess }) {
  return (
    <div className="card" data-poke-id={pokemon.id} onClick={handleGuess}>
      <img
        className="card-sprite"
        draggable="false"
        src={pokemon.sprite}
        alt={pokemon.name}
      />
      <h3 className="card-name">{pokemon.name}</h3>
    </div>
  );
}

export default Card;
