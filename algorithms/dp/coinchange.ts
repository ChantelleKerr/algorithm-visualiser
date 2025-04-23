import { Cell } from "@/types/types";

export const RunCoinChangeAlgorithm = (
  table: Cell[][],
  coins: number[],
  target: number
) => {
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= target; j++) {
      console.log(i, j, coins[i - 1]);
      if (j - coins[i - 1] >= 0) {
        table[i][j].value = Math.min(
          table[i - 1][j].value,
          1 + table[i][j - coins[i - 1]].value
        );
      } else {
        table[i][j].value = table[i - 1][j].value;
      }
    }
  }

  let i = coins.length;
  let j = target;
  const selectedCoins: number[] = [];

  while (i > 0 && j > 0) {
    const currentCoin: number = table[i][j].value;
    if (currentCoin == table[i - 1][j].value) {
      i--;
    } else {
      selectedCoins.push(coins[i - 1]);
      j -= coins[i - 1];
    }
  }

  return { table, selectedCoins };
};
