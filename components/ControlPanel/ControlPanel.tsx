"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BFS } from "@/algorithms/pathfinder/bfs";
import { Node } from "@/types/types";
import { useState } from "react";

interface Props {
  grid: Node[][];
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>;
  rows: number;
  cols: number;
}
const ControlPanel = ({ grid, setGrid, rows, cols }: Props) => {
  const [algorithm, setAlgorithm] = useState<string>();
  const visualiseAlgorithm = () => {
    switch (algorithm) {
      case "BFS":
        BFS(grid, grid[0][0], setGrid, rows, cols);
        return;
      default:
        return;
    }
  };

  return (
    <div className="flex w-full py-14 justify-end gap-4">
      <Select onValueChange={(val) => setAlgorithm(val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Search Algorithm" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="BFS">BFS</SelectItem>
          <SelectItem value="DFS">DFS -- Coming Soon</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={visualiseAlgorithm}>START VISUALISATION</Button>
    </div>
  );
};

export default ControlPanel;
