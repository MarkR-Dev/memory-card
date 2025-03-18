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

    // Shuffle Pokemon after each guess
    setPokemonData(shuffledPokemonData);
  }

  return (
    <main>
      <section className="info-container">
        <div className="game-info-container">
          <h1 className="title">Memory Game</h1>
          <h2 className="how-to">
            How To Play: Click on unique Pokemon to increase your score,
            repeated guesses will reset your score to 0!
          </h2>
        </div>
        <div className="score-info-container">
          <h2 className="current-score">{"Current Score: " + currentScore}</h2>
          <h2 className="best-score">{"Best Score: " + bestScore}</h2>
        </div>
      </section>

      <section className="cards-container">
        {pokemonData.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              handleGuess={handleGuess}
            />
          );
        })}
      </section>
    </main>
  );
}

export default MemoryGame;
