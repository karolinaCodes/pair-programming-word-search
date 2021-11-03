const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let i = 0; i < letters[0].length; i++) {
    let string = "";
    for (let j = 0; j < letters.length; j++) {
      string += letters[j][i];
    }
    if (string.includes(word)) {
      return true;
    } else {
      continue;
    }
  }

  return false;
};
// ANOTHER WAY TO SOLVE-> (THIS ONE FROM MATRIX PROBLEM) return matrix[0].map((col, i) => matrix.map(row => row[i]));

module.exports = wordSearch;

/* const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD') */
