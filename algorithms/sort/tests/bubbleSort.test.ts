import { BubbleSort } from "../bubbleSort";

describe("BubbleSort", () => {
  it("Sort Array in Ascending Order", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(BubbleSort(input)).toEqual(expected);
  });

  it("Already Sorted Array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(BubbleSort(input)).toEqual(expected);
  });

  it("Duplicate Numbers in Array", () => {
    const input = [4, 2, 2, 8, 3, 3, 1];
    const expected = [1, 2, 2, 3, 3, 4, 8];
    expect(BubbleSort(input)).toEqual(expected);
  });

  it("One Element", () => {
    const input = [42];
    const expected = [42];
    expect(BubbleSort(input)).toEqual(expected);
  });

  it("Empty Array", () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(BubbleSort(input)).toEqual(expected);
  });
});
