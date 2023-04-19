export const generateRandomNumsInArr = (len, min, max) => {
  const arr = [];
  const seen = new Set();
  while (arr.length < len) {
    const candidateInt = Math.floor(Math.random() * (max - min + 1) + min);
    if (seen.has(candidateInt)) continue;
    arr.push(candidateInt);
    seen.add(candidateInt);
  }
  return arr;
};

// console.log(generateRandomNumsInArr(40, 1, 40));
