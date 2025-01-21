"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import sleep from "@/utils/utils";

interface SortContextType {
  array: number[];
  setArray: (array: number[]) => void;
  setSwappingIndices: (indices: [number, number] | null) => void;
  swappingIndices: [number, number] | null;
  pointerIndices: [number, number] | null;
  setPointerIndices: (pointers: [number, number] | null) => void;
  resetSort: () => void;
  pivotIndex: number | null;
  setPivotIndex: (pivot: number) => void;
  setPartitionIndices: (pointers: [number, number] | null) => void;
  partitionIndices: [number, number] | null;
}

const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider = ({ children }: { children: ReactNode }) => {
  const initialArray = [6, 23, 1, 34, 5, 3, 8, 10, 50, 7, 18];
  const [array, setArray] = useState<number[]>(initialArray);
  const [swappingIndices, setSwappingIndices] = useState<
    [number, number] | null
  >(null);
  const [pointerIndices, setPointerIndices] = useState<[number, number] | null>(
    null
  );

  const [pivotIndex, setPivotIndex] = useState<number | null>(null);
  const [partitionIndices, setPartitionIndices] = useState<
    [number, number] | null
  >(null);

  const resetSort = () => {
    setArray(initialArray);
    setSwappingIndices(null);
    setPointerIndices(null);
  };

  return (
    <SortContext.Provider
      value={{
        array,
        setArray,
        swappingIndices,
        setSwappingIndices,
        pointerIndices,
        setPointerIndices,
        resetSort,
        setPivotIndex,
        pivotIndex,
        setPartitionIndices,
        partitionIndices,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSort must be used within a SortProvider");
  }
  return context;
};
