# Memory Card

This project is a Pokemon themed "Memory Game" created to practice using React useState and useEffect. The game fetches Pokemon information from a Pokemon API and renders it into Card components to play the game. The game works via a scoring system based on how many unique Pokemon the user can click without repeating a guess, with the aim of reaching a maximum score based on the total number of Pokemon there are (Currently hard coded to be 10).

The fetched data from the Pokemon API is stored locally via local storage web API and will be loaded when the page is re-opened or refreshed. Users can also click a button to fetch 10 new Pokemon if they wish.

Some improvements that could be made if I were to spend more time on this project:

- Loading spinner when fetching initial and new data to inform the user that an action is being performed on the page
- Better styling and layout
- Better error handling within the fetch calls, shouldn't fetch any more data if encountering an error on the current fetch, return the stock data instead
- Read up on Abort Controller

Pokemon API
https://pokeapi.co/

Pokemon font by Jackster Productions
https://www.fontspace.com/pokemon-gb-font-f9621
