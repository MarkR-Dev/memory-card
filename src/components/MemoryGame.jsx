import { useState, useEffect, useRef } from "react";
import stockData from "../utils/stock-data";
import generateRandomIds from "../utils/generateRandomIds";
import shuffleArray from "../utils/shuffleArray";
import cleanData from "../utils/cleanData";
import * as storage from "../utils/localStorage";
import fetchPokemon from "../utils/fetchPokemon";
import Card from "./Card";
import "../styles/memory-game.css";

function MemoryGame() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const currentScore = selectedIds.length;
  const TOTAL_POKEMON = 10;
  // useRef to prevent double calling the useEffect in development mode, which avoids running the fetch call twice.
  // This probably isn't needed since swapping over to caching the data with local storage
  const effectRan = useRef(false);

  useEffect(() => {
    async function getPokemon(ids) {
      try {
        const data = await fetchPokemon(ids);

        const pokemonData = cleanData(data);
        setPokemonData(pokemonData);
        storage.setLocalStorage(pokemonData);
      } catch {
        setPokemonData([...stockData]);
        storage.setLocalStorage(stockData);
      }
    }

    if (!effectRan.current) {
      const cachedData = storage.getLocalStorage();
      if (cachedData !== null) {
        setPokemonData(cachedData);
      } else {
        const randomIds = generateRandomIds(TOTAL_POKEMON);

        getPokemon(randomIds);
      }
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  async function getNewPokemon() {
    try {
      const randomIds = generateRandomIds(TOTAL_POKEMON);
      const data = await fetchPokemon(randomIds);

      const pokemonData = cleanData(data);
      setPokemonData(pokemonData);
      storage.setLocalStorage(pokemonData);
    } catch {
      setPokemonData([...stockData]);
      storage.setLocalStorage(stockData);
    }
  }

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
        <button type="button" className="new-pokemon" onClick={getNewPokemon}>
          New Pokemon
        </button>
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
