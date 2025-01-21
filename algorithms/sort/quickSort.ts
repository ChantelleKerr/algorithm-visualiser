import { swap } from "@/algorithms/helper";

const partition = (array: number[], low: number, high: number) => {
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  let newPivotIndex = i + 1;
  return newPivotIndex;
};

export const QuickSort = async (
  array: number[],
  low: number,
  high: number,
  visualiseSwap: (
    array: number[],
    indices: [number, number],
    pointers: [number, number],
    pivot: number
  ) => void
) => {
  if (low < high) {
    let pivotIndex = await partition(array, low, high);
    await visualiseSwap([...array], [-1, -1], [-1, -1], pivotIndex);

    QuickSort(array, low, pivotIndex - 1, visualiseSwap);

    QuickSort(array, pivotIndex + 1, high, visualiseSwap);
  }
  return array;
};
