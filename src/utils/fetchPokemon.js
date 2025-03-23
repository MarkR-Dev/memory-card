// Create an array of fetch promises by mapping over the Ids, wait for them to fulfill and convert the responses to json
// Return a rejected promise if any errors and handle that where this function is used
async function fetchPokemon(ids) {
  try {
    const fetchedPromises = ids.map((id) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        mode: "cors",
      });
    });

    const responses = await Promise.all(fetchedPromises);
    const data = await Promise.all(responses.map((res) => res.json()));
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export default fetchPokemon;
