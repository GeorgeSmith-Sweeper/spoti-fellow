const changePossibilities = (amount, denominations, coinLocation = 0) => {
  if (amount === 0) {
    return 1;
  }
  if (amount < 0 || coinLocation === denominations.length) {
    return 0;
  }
  const currentCoin = denominations[coinLocation];
  let totalCombos = 0;
  while (amount >= 0) {
    totalCombos += changePossibilities(amount, denominations, coinLocation + 1);
    amount -= currentCoin;
  }
  return totalCombos;
};

/*
  feel free to check the live version of my code at:
  https://repl.it/@GeorgeSS/changePossibilities
*/
