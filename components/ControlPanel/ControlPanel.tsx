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
import { Node, NodeType } from "@/types/types";
import { ReactNode, useState } from "react";
import AlgorithmInfo from "@/components/ControlPanel/AlgorithmInfo";
import { useGrid } from "@/context/GridProvider";

const ControlPanel = ({ children }: { children: React.ReactNode }) => {
  const {
    clearGrid,
    grid,
    setGrid,
    ROWS,
    COLS,
    setSelectedNodeType,
    startNode,
  } = useGrid();
  const [algorithm, setAlgorithm] = useState<string>();
  const [algorithmDescription, setAlgorithmDescription] = useState<string>();
  const [algorithmPseudocode, setPseudocode] = useState<string>();

  const visualiseAlgorithm = () => {
    switch (algorithm) {
      case "Breadth First Search":
        BFS(grid, startNode, setGrid, ROWS, COLS);
        break;
      case "Depth First Search":
        DFS(grid, startNode, setGrid, ROWS, COLS);
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

  const handleNodeSelectionChange = (value: string) => {
    switch (value) {
      case "Start":
        setSelectedNodeType(NodeType.Start);
        break;
      case "End":
        setSelectedNodeType(NodeType.End);
        break;
      case "Wall":
        setSelectedNodeType(NodeType.Wall);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex w-full py-8 justify-end gap-3">
        <Select onValueChange={(val) => handleNodeSelectionChange(val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Node Selector" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Start">Select Start Node</SelectItem>
            <SelectItem value="End">Select End Node</SelectItem>
            <SelectItem value="Wall">Select Wall Node</SelectItem>
          </SelectContent>
        </Select>
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
        <Button onClick={visualiseAlgorithm}>VISUALISE</Button>
        <Button variant="secondary" className="border" onClick={clearGrid}>
          CLEAR
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
