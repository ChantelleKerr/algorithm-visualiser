"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { Node, NodeStatus, NodeType } from "@/types/types";

const createNode = (
  row: number,
  col: number,
  type: NodeType,
  status: NodeStatus
): Node => {
  return {
    row,
    col,
    type,
    status,
  };
};

interface GridContextType {
  grid: Node[][];
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>;
  createGrid: () => void;
  ROWS: number;
  COLS: number;
}

const GridContext = createContext<GridContextType | undefined>(undefined);

export const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [grid, setGrid] = useState<Node[][]>([]);
  const ROWS = 10;
  const COLS = 30;
  const START_POS = [0, 0];
  const END_POS = [9, 9];

  const createGrid = () => {
    const newGrid: Node[][] = [];
    for (let row = 0; row < ROWS; row++) {
      const newRow: Node[] = [];
      for (let col = 0; col < COLS; col++) {
        if (START_POS[0] == row && START_POS[1] == col) {
          newRow.push(createNode(row, col, NodeType.Start, NodeStatus.Unseen));
        } else if (END_POS[0] == row && END_POS[1] == col) {
          newRow.push(createNode(row, col, NodeType.End, NodeStatus.Unseen));
        } else {
          newRow.push(createNode(row, col, NodeType.Blank, NodeStatus.Unseen));
        }
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  return (
    <GridContext.Provider value={{ grid, setGrid, createGrid, ROWS, COLS }}>
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error("useGrid must be used within a GridProvider");
  }
  return context;
};
