const swap = (array: number[], i: number, j: number): void => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const BubbleSort = async (
  array: number[],
  visualiseSwap: (
    array: number[],
    indices: [number, number],
    pointers: [number, number]
  ) => void
) => {
  let n: number = array.length;
  let swapped: boolean = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      await visualiseSwap([...array], [-1, -1], [i - 1, i]);
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        await visualiseSwap([...array], [i - 1, i], [i - 1, i]);
        swapped = true;
      }
    }
    n--;
  }
  return array;
};

export const pseudocodeBubbleSort: string = ` function swap(array, i, j):
  temp = array[i]
  array[i] = array[j]
  array[j] = temp

function bubbleSort(array):
  n = array length
  swapping = true
  while swapped:
    swapped = false
    for i = 1 to n:
      if array[i-1] > array[i]
        swap(array, i-1, i)
        swapped = true
    n--`;

export const descriptionBubbleSort: string = `A sorting algorithm that repeatedly steps through the list using two pointers, it compares the adjacent elements, and swaps them if they are in the wrong order. 
This process is repeated until the list is sorted. Known for its simplicity, Bubble Sort has a time complexity of 𝑂(𝑛^2)
in the average and worst cases, making it inefficient for large datasets.`;
