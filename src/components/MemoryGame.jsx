import { useState } from "react";
import stockData from "../utils/stock-data";
import generateRandomIds from "../utils/generateRandomIds";
import shuffleArray from "../utils/shuffleArray";
import Card from "./Card";
import "../styles/memory-game.css";

function MemoryGame() {
  const [pokemonData, setPokemonData] = useState([...stockData]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const currentScore = selectedIds.length;
  const TOTAL_POKEMON = 10;

  function handleGuess(event) {
    const targetId = event.target.closest("[data-poke-id").dataset.pokeId;
    const shuffledPokemonData = shuffleArray(pokemonData);

    if (selectedIds.includes(targetId)) {
      // Guess has been repeated
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }

      setSelectedIds([]);
    } else {
      // Guess hasn't been repeated
      setSelectedIds([...selectedIds, targetId]);
    }

    // Shuffle after each guess
    setPokemonData(shuffledPokemonData);
  }

  return (
    <main>
      <div>
        <h2>{"Current Score: " + currentScore}</h2>
        <h2>{"Best Score: " + bestScore}</h2>
      </div>
      {pokemonData.map((pokemon) => {
        return (
          <Card key={pokemon.id} pokemon={pokemon} handleGuess={handleGuess} />
        );
      })}
    </main>
  );
}

export default MemoryGame;
