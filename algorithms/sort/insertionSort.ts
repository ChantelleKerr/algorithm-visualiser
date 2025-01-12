import { swap } from "../helper";

export const InsertionSort = async (
  array: number[],
  visualiseSwap: (
    array: number[],
    indices: [number, number],
    pointers: [number, number]
  ) => void
) => {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      await visualiseSwap(array, [j, j - 1], [j - 1, j]);
      swap(array, j, j - 1);
      await visualiseSwap(array, [j, j - 1], [j - 1, j]);
      j--;
    }

    await visualiseSwap(array, [-1, -1], [i, i + 1]);
  }
  return array;
};

export const pseudocodeInsertionSort: string = ` function swap(array, i, j):
  temp = array[i]
  array[i] = array[j]
  array[j] = temp

function insertionSort(array):
  n = array length
  for i = 1 to i < n:
    let j = i
    while j > 0 and array[j-1] > array[j]:
      swap(array, i-1, i)
      j--`;

export const descriptionInsertionSort: string = `sorting algorithm that works by gradually building a sorted section at the beginning of the array. 
Starting with the second element, the algorithm compares each element to its predecessors and "inserts" it into its correct position within the sorted section. 
This process repeats until all elements have been processed, leaving the array fully sorted. Insertion sort is efficient for small or nearly sorted datasets 
but has a time complexity of 𝑂(𝑛^2) for larger, unsorted inputs`;
