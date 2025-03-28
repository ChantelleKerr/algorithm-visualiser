"use client";
import { useState } from "react";
import AlgorithmInfo from "@/components/ControlPanel/AlgorithmInfo";
import { useSort } from "@/context/SortProvider";
import { useVisualisation } from "@/hooks/useVisualisation";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BubbleSort,
  pseudocodeBubbleSort,
  descriptionBubbleSort,
} from "@/algorithms/sort/bubbleSort";
import {
  SelectionSort,
  pseudocodeSelectionSort,
  descriptionSelectionSort,
} from "@/algorithms/sort/selectionSort";
import {
  InsertionSort,
  pseudocodeInsertionSort,
  descriptionInsertionSort,
} from "@/algorithms/sort/insertionSort";
import {
  descriptionQuickSort,
  pseudocodeQuickSort,
  QuickSort,
} from "@/algorithms/sort/quickSort";

const SortController = ({ children }: { children: React.ReactNode }) => {
  const { array, resetSort } = useSort();
  const {
    visualiseSwap,
    visualisePointers,
    visualisePivot,
    visualisePartition,
  } = useVisualisation();
  const [algorithm, setAlgorithm] = useState<string>();
  const [algorithmDescription, setAlgorithmDescription] = useState<string>();
  const [algorithmPseudocode, setPseudocode] = useState<string>();

  const visualiseAlgorithm = async () => {
    switch (algorithm) {
      case "Bubble Sort":
        BubbleSort(array, visualiseSwap, visualisePointers);
        break;
      case "Selection Sort":
        SelectionSort(array, visualiseSwap, visualisePointers);
        break;
      case "Insertion Sort":
        InsertionSort(array, visualiseSwap, visualisePointers);
        break;
      case "Quick Sort":
        QuickSort(
          array,
          0,
          array.length - 1,
          visualiseSwap,
          visualisePointers,
          visualisePivot,
          visualisePartition
        );
        break;
      default:
        break;
    }
  };

  const handleAlgorithmChange = (value: string) => {
    switch (value) {
      case "Bubble Sort":
        setAlgorithm(value);
        setAlgorithmDescription(descriptionBubbleSort);
        setPseudocode(pseudocodeBubbleSort);
        break;
      case "Selection Sort":
        setAlgorithm(value);
        setAlgorithmDescription(descriptionSelectionSort);
        setPseudocode(pseudocodeSelectionSort);
        break;
      case "Insertion Sort":
        setAlgorithm(value);
        setAlgorithmDescription(descriptionInsertionSort);
        setPseudocode(pseudocodeInsertionSort);
        break;
      case "Quick Sort":
        setAlgorithm(value);
        setAlgorithmDescription(descriptionQuickSort);
        setPseudocode(pseudocodeQuickSort);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-5">
      <div className="flex w-full justify-between py-3">
        <h1 className="text-xl">Sorting</h1>
        <div className="flex gap-3 flex-col md:flex-row">
          <Select onValueChange={(val) => handleAlgorithmChange(val)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Search Algorithm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bubble Sort">Bubble Sort</SelectItem>
              <SelectItem value="Selection Sort">Selection Sort</SelectItem>
              <SelectItem value="Insertion Sort">Insertion Sort</SelectItem>
              <SelectItem value="Quick Sort">Quick Sort</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={visualiseAlgorithm}>SORT</Button>
          <Button variant="secondary" className="border" onClick={resetSort}>
            RESET
          </Button>
        </div>
      </div>

      {children}
      {algorithm && (
        <AlgorithmInfo
          algorithm={algorithm}
          description={algorithmDescription}
          pseudocode={algorithmPseudocode}
        />
      )}
    </div>
  );
};

export default SortController;
