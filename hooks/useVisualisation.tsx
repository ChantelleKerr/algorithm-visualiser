import sleep from "@/utils/utils";
import { useSort } from "@/context/SortProvider";
export const useVisualisation = () => {
  const { setArray, setSwappingIndices, setPointerIndices, setPivotIndex } =
    useSort();

  const visualiseSwap = async (
    array: number[],
    indices: [number, number],
    pointers: [number, number],
    pivot?: number
  ) => {
    if (pivot) {
      setPivotIndex(pivot);
    }
    setSwappingIndices(indices);
    setPointerIndices(pointers);

    setArray(array);
    await sleep(1000);
    setSwappingIndices(null);
    setPointerIndices(null);
  };

  return visualiseSwap;
};
