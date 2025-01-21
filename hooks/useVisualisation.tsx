import sleep from "@/utils/utils";
import { useSort } from "@/context/SortProvider";

export const useVisualisation = () => {
  const {
    setArray,
    setSwappingIndices,
    setPointerIndices,
    setPivotIndex,
    setPartitionIndices,
  } = useSort();

  const visualiseSwap = async (array: number[], indices: [number, number]) => {
    setSwappingIndices(indices);
    setArray(array);
    await sleep(1000);
    setSwappingIndices(null);
  };

  const visualisePointers = async (pointers: [number, number]) => {
    setPointerIndices(pointers);
    await sleep(1000);
    setPointerIndices(null);
  };

  const visualisePivot = async (pivot: number) => {
    setPivotIndex(pivot);
  };

  const visualisePartition = async (pointers: [number, number]) => {
    setPartitionIndices(pointers);
  };

  return {
    visualiseSwap,
    visualisePointers,
    visualisePivot,
    visualisePartition,
  };
};
