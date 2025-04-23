import { CellType } from "@/types/types";
import { RunCoinChangeAlgorithm } from "../coinchange";

it("Correct matrix output for coins [1, 5, 6, 9] and target 11", async () => {
  const coins = [1, 5, 6, 9];
  const target: number = 11;
  const table = [];

  for (let i = 0; i <= coins.length; i++) {
    const row = [];
    for (let j = 0; j <= target; j++) {
      row.push({
        value: j === 0 ? 0 : i === 0 ? Infinity : Infinity,
        type: CellType.Blank,
      });
    }
    table.push(row);
  }

  const expectedTable = [
    [
      0,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
    ],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 3],
    [0, 1, 2, 3, 4, 1, 1, 2, 3, 4, 2, 2],
    [0, 1, 2, 3, 4, 1, 1, 2, 3, 1, 2, 2],
  ].map((row) =>
    row.map((val) => ({
      value: val,
      type: CellType.Blank,
    }))
  );
  const expectedCoins = [5, 6];

  const { table: computedTable, selectedCoins } = RunCoinChangeAlgorithm(
    table,
    coins,
    target
  );

  expect(computedTable.map((row) => row.map((cell) => cell.value))).toEqual(
    expectedTable.map((row) => row.map((cell) => cell.value))
  );
  expect(selectedCoins.sort()).toEqual(expectedCoins);
});

describe("Coin Change", () => {
  it("Correct matrix output for coins [2, 3, 6] and target 9", async () => {
    const coins = [2, 3, 6];
    const target = 9;
    const table = [];

    for (let i = 0; i <= coins.length; i++) {
      const row = [];
      for (let j = 0; j <= target; j++) {
        row.push({
          value: j === 0 ? 0 : i === 0 ? Infinity : Infinity,
          type: CellType.Blank,
        });
      }
      table.push(row);
    }

    const expectedTable = [
      [
        0,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
      ],
      [0, Infinity, 1, Infinity, 2, Infinity, 3, Infinity, 4, Infinity],
      [0, Infinity, 1, 1, 2, 2, 2, 3, 3, 3],
      [0, Infinity, 1, 1, 2, 2, 1, 3, 2, 2],
    ].map((row) =>
      row.map((val) => ({
        value: val,
        type: CellType.Blank,
      }))
    );

    const expectedCoins = [3, 6];

    const { table: computedTable, selectedCoins } = RunCoinChangeAlgorithm(
      table,
      coins,
      target
    );

    expect(computedTable.map((row) => row.map((cell) => cell.value))).toEqual(
      expectedTable.map((row) => row.map((cell) => cell.value))
    );
    expect(selectedCoins.sort()).toEqual(expectedCoins.sort());
  });
});
