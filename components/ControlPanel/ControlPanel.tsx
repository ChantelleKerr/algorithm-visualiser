"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BFS,
  pseudocodeBFS,
  descriptionBFS,
} from "@/algorithms/pathfinder/bfs";
import {
  DFS,
  pseudocodeDFS,
  descriptionDFS,
} from "@/algorithms/pathfinder/dfs";
import { Node } from "@/types/types";
import { ReactNode, useState } from "react";
import AlgorithmInfo from "@/components/ControlPanel/AlgorithmInfo";

interface Props {
  grid: Node[][];
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>;
  rows: number;
  cols: number;
  createGrid: () => void;
  children: ReactNode;
}
const ControlPanel = ({
  grid,
  setGrid,
  rows,
  cols,
  createGrid,
  children,
}: Props) => {
  const [algorithm, setAlgorithm] = useState<string>();
  const [algorithmDescription, setAlgorithmDescription] = useState<string>();
  const [algorithmPseudocode, setPseudocode] = useState<string>();

  const visualiseAlgorithm = () => {
    switch (algorithm) {
      case "Breadth First Search":
        BFS(grid, grid[0][0], setGrid, rows, cols);
        break;
      case "Depth First Search":
        DFS(grid, grid[0][0], setGrid, rows, cols);
        break;
      default:
        break;
    }
  };

  const handleAlgorithmChange = (value: string) => {
    switch (value) {
      case "Breadth First Search":
        setAlgorithm("Breadth First Search");
        setAlgorithmDescription(descriptionBFS);
        setPseudocode(pseudocodeBFS);
        break;
      case "Depth First Search":
        setAlgorithm("Depth First Search");
        setAlgorithmDescription(descriptionDFS);
        setPseudocode(pseudocodeDFS);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex w-full py-8 justify-end gap-3">
        <Select onValueChange={(val) => handleAlgorithmChange(val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Search Algorithm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Breadth First Search">
              Breadth First Search
            </SelectItem>
            <SelectItem value="Depth First Search">
              Depth First Search
            </SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={visualiseAlgorithm}>START VISUALISATION</Button>
        <Button variant="secondary" className="border" onClick={createGrid}>
          CLEAR GRID
        </Button>
      </div>

      {children}
      {algorithm && (
        <AlgorithmInfo
          algorithm={algorithm}
          description={algorithmDescription}
          pseudocode={algorithmPseudocode}
        />
      )}
    </>
  );
};

export default ControlPanel;
