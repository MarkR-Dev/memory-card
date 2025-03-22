function getLocalStorage() {
  const cachedData = JSON.parse(localStorage.getItem("pokemon"));
  return cachedData;
}

function removeLocalStorage() {
  localStorage.removeItem("pokemon");
}

function setLocalStorage(pokeArray) {
  localStorage.setItem("pokemon", JSON.stringify(pokeArray));
}

export { getLocalStorage, removeLocalStorage, setLocalStorage };
