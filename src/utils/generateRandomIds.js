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
