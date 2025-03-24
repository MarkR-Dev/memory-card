// Generate unique random Ids representing the pokemon Ids used in the PokeAPI, limiting the creation to the first 151 pokemon (gen 1)
function makeRandomIds(total) {
  const randomIds = [];

  while (randomIds.length < total) {
    const randomId = Math.floor(Math.random() * 151) + 1;
    if (!randomIds.includes(randomId)) {
      randomIds.push(randomId);
    }
  }

  return randomIds;
}

export default makeRandomIds;
