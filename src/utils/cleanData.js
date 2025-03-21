function cleanData(dataArray) {
  return dataArray.map((poke) => {
    return {
      name: poke.name,
      id: poke.id,
      sprite: poke.sprites.other["official-artwork"].front_default,
    };
  });
}

export default cleanData;
