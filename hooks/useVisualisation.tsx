import sleep from "@/utils/utils";
import { useSort } from "@/context/SortProvider";
export const useVisualisation = () => {
  const { setArray, setSwappingIndices, setPointerIndices } = useSort();

  const visualiseSwap = async (
    array: number[],
    indices: [number, number],
    pointers: [number, number]
  ) => {
    setSwappingIndices(indices);
    setPointerIndices(pointers);
    setArray(array);
    await sleep(1000);
    setSwappingIndices(null);
    setPointerIndices(null);
  };

  return visualiseSwap;
};
