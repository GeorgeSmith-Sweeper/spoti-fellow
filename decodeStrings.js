// helper functions called within "decodeStrings"
const isOpeningBracket = stack => stack[stack.length - 1] === '[';

const isClosingBracket = str => str === ']';

const isNumber = stack => stack.length > 0 && parseInt(stack[stack.length - 1], 0);

const buildResult = (stack) => {
  let result = '';
  while (stack.length > 0) {
    result += `${stack.pop()}${result}`;
  }
  return result;
};

const decodeStrings = (str) => {
  const stack = [];

  for (const char of str) {
    if (!isClosingBracket(char)) {
      stack.push(char);
    } else {
      let txtToRepeat = '';
      while (!isOpeningBracket(stack)) {
        txtToRepeat = `${stack.pop()}${txtToRepeat}`;
      }
      stack.pop();
      let timesToRepeat = '';
      while (isNumber(stack)) {
        timesToRepeat = `${stack.pop()}${timesToRepeat}`;
      }
      timesToRepeat = parseInt(timesToRepeat, 0);
      const builtStr = txtToRepeat.repeat(timesToRepeat);
      stack.push(builtStr);
    }
  }
  return buildResult(stack);
};

/*
  feel free to check the live version of my code at:
  https://repl.it/@GeorgeSS/decodeStrings
*/
