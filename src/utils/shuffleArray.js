// Fisher-Yates shuffle in place swaps two array index values by using a temp variable, used a copy of the array to avoid any manipulating state issues
function shuffleArray(arr) {
  const copy = [...arr];
  let i = copy.length;
  let j = 0;
  let temp = null;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }

  return copy;
}

export default shuffleArray;
