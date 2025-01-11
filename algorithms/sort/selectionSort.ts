import { swap } from "@/algorithms/helper";
export const SelectionSort = async (
  array: number[],
  visualiseSwap: (
    array: number[],
    indices: [number, number],
    pointers: [number, number]
  ) => void
) => {
  const n: number = array.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;

    await visualiseSwap(array, [-1, -1], [i, min]);

    for (let j = i + 1; j < n; j++) {
      await visualiseSwap(array, [-1, -1], [i, j]);

      if (array[j] < array[min]) {
        min = j;
      }
    }

    await visualiseSwap(array, [-1, -1], [i, min]);

    if (min != i) {
      await visualiseSwap(array, [i, min], [i, min]);
      swap(array, i, min);
    }
  }
  return array;
};

export const pseudocodeSelectionSort: string = ` function swap(array, i, j):
  temp = array[i]
  array[i] = array[j]
  array[j] = temp

function selectionSort(array):
  n = array length
  for i = 0 to i < n - 1:
    min = i
    for j = i + 1 to j < n:
      if array[j] < array[min]
        min = j

    if min != i:
      swap(array, i, min)`;

export const descriptionSelectionSort: string = `A comparison-based sorting algorithm that divides the array into two parts: a sorted section and an unsorted section. 
It iteratively selects the smallest (or largest) element from the unsorted section and swaps it with the first element in the unsorted section, 
expanding the sorted section one element at a time. While easy to implement, its time complexity is 𝑂(𝑛^2), making it inefficient for large datasets.`;
