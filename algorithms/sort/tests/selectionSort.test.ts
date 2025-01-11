import { SelectionSort } from "../selectionSort";

describe("SelectionSort", () => {
  const mockVisualiseSwap = jest.fn(async () => {});
  it("Sort Array in Ascending Order", async () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];

    const result = await SelectionSort(input, mockVisualiseSwap);

    expect(result).toEqual(expected);
    expect(mockVisualiseSwap).toHaveBeenCalled();
  });

  it("Already Sorted Array", async () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = await SelectionSort(input, mockVisualiseSwap);

    expect(result).toEqual(expected);
    expect(mockVisualiseSwap).toHaveBeenCalled();
  });

  it("Duplicate Numbers in Array", async () => {
    const input = [4, 2, 2, 8, 3, 3, 1];
    const expected = [1, 2, 2, 3, 3, 4, 8];
    const result = await SelectionSort(input, mockVisualiseSwap);

    expect(result).toEqual(expected);
    expect(mockVisualiseSwap).toHaveBeenCalled();
  });

  it("One Element", async () => {
    const input = [42];
    const expected = [42];
    const result = await SelectionSort(input, mockVisualiseSwap);

    expect(result).toEqual(expected);
    expect(mockVisualiseSwap).toHaveBeenCalled();
  });

  it("Empty Array", async () => {
    const input: number[] = [];
    const expected: number[] = [];
    const result = await SelectionSort(input, mockVisualiseSwap);

    expect(result).toEqual(expected);
    expect(mockVisualiseSwap).toHaveBeenCalled();
  });
});
