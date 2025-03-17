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

  return (
    <main>
      {pokemonData.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} />;
      })}
    </main>
  );
}

export default MemoryGame;
