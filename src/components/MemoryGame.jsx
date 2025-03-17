import { useState } from "react";
import stockData from "../utils/stock-data";
import generateRandomIds from "../utils/generateRandomIds";
import shuffleArray from "../utils/shuffleArray";
import Card from "./Card";
import "../styles/memory-game.css";

function MemoryGame() {
  const TOTAL_POKEMON = 10;
  const [pokemonData, setPokemonData] = useState([...stockData]);
  const [selectedIds, setSelectedIds] = useState([]); // store in array here or setState true/false on each card?
  const [currentScore, setCurrentScore] = useState(0); // need this or calculate on render based on length of selected array?
  const [bestScore, setBestScore] = useState(0);
  //
  const currentS = selectedIds.length;

  function handleGuess(event) {
    const targetId = event.target.closest("[data-poke-id").dataset.pokeId;
    const shuffledPokemonData = shuffleArray(pokemonData);

    /*
    // Guess has been repeated
    if (selectedIds.includes(targetId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedIds([]);
    } else {
      // Guess hasn't been repeated
      setSelectedIds([...selectedIds, targetId]);
      setCurrentScore((currentScore) => currentScore + 1);
    }

    // Shuffle after each guess
    setPokemonData(shuffledPokemonData);
    */

    // Guess has been repeated
    if (selectedIds.includes(targetId)) {
      if (currentS > bestScore) {
        setBestScore(currentS);
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
        {/* <h2>{"Current Score: " + currentScore}</h2>
        <h2>{"Best Score: " + bestScore}</h2> */}

        <h2>{"Current Score: " + currentS}</h2>
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
