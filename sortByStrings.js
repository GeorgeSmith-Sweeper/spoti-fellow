// helper function to count occurances of a letter within a string
const countOccurances = (letter, str) => {
  let counter = 0;
  for (const char of str) {
    if (char === letter) {
      counter += 1;
    }
  }
  return counter;
};

const sortByStrings = (str, order) => {
  let result = '';
  for (const letter of order) {
    if (str.includes(letter)) {
      result += letter.repeat(countOccurances(letter, str));
    }
  }
  return result;
};

/*
  feel free to check the live version of my code at:
  https://repl.it/@GeorgeSS/sortByStrings
*/
