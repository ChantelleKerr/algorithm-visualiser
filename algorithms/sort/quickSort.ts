import { swap } from "@/algorithms/helper";
import sleep from "@/utils/utils";

const partition = async (
  array: number[],
  low: number,
  high: number,
  visualiseSwap: (array: number[], indices: [number, number]) => void,
  visualisePointers: (pointers: [number, number]) => void,
  visualisePivot: (pivot: number) => void
) => {
  let pivot = array[high];
  await visualisePivot(high);
  let i = low;

  await visualisePointers([i, high]);
  for (let j = low; j < high; j++) {
    await visualisePointers([i, j]);
    await visualisePivot(high);
    if (array[j] < pivot) {
      await visualisePointers([i, j]);
      if (i !== j) {
        await visualiseSwap([...array], [i, j]);
        console.log("HI");
        swap(array, i, j);
        console.log("BYE");
        await visualiseSwap([...array], [i, j]);
      }
      i++;
    }
  }
  let newPivotIndex = i;
  await visualiseSwap([...array], [newPivotIndex, high]);
  swap(array, newPivotIndex, high);
  await visualiseSwap([...array], [newPivotIndex, high]);

  return newPivotIndex;
};

export const QuickSort = async (
  array: number[],
  low: number,
  high: number,
  visualiseSwap: (array: number[], indices: [number, number]) => void,
  visualisePointers: (pointers: [number, number]) => void,
  visualisePivot: (pivot: number) => void,
  visualisePartition: (pointers: [number, number]) => void
) => {
  if (low < high) {
    await visualisePartition([low, high]);
    let pivotIndex = await partition(
      array,
      low,
      high,
      visualiseSwap,
      visualisePointers,
      visualisePivot
    );
    await visualisePivot(pivotIndex);
    await visualisePartition([low, pivotIndex - 1]);

    await QuickSort(
      array,
      low,
      pivotIndex - 1,
      visualiseSwap,
      visualisePointers,
      visualisePivot,
      visualisePartition
    );

    await visualisePartition([pivotIndex + 1, high]);
    await QuickSort(
      array,
      pivotIndex + 1,
      high,
      visualiseSwap,
      visualisePointers,
      visualisePivot,
      visualisePartition
    );
  }
  return array;
};

export const pseudocodeQuickSort: string = `function swap(array, i, j):
  temp = array[i]
  array[i] = array[j]
  array[j] = temp

function partition(array,low, high):
  pivot = array[high]
  i = low
  for j = low to j < high, j++:
    if array[j] < pivot:
      swap(array, i, j)
    i++
  newPivotIndex = i
  return newPivotIndex 

function QuickSort(array, low, high):
  if low < high:
    pivotIndex = partition(array, low, high)
    QuickSort(array, low, pivotIndex - 1)
    QuickSort(array, pivotIndex + 1, high)
    `;

export const descriptionQuickSort: string = `A sorting algorithm that uses the divide-and-conquer strategy. It selects a pivot element and partitions the array into two subarrays: 
one with elements less than the pivot and one with elements greater than or equal to the pivot. The algorithm then recursively sorts the subarrays. 
QuickSort has an average-case time complexity of O(n log n) and is widely used due to its performance on large datasets.`;
