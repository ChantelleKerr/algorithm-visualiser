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
  clearGrid: () => void;
  createGrid: () => void;
  startNode: Node | null;
  endNode: Node | null;
  ROWS: number;
  COLS: number;
  selectedNodeType: NodeType;
  setSelectedNodeType: React.Dispatch<React.SetStateAction<NodeType>>;
  updateNodeType: (row: number, cols: number, type: NodeType) => void;
}

const GridContext = createContext<GridContextType | undefined>(undefined);

export const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [grid, setGrid] = useState<Node[][]>([]);
  const ROWS = 10;
  const COLS = 20;
  const [startNode, setStartNode] = useState<Node | null>(null);
  const [endNode, setEndNode] = useState<Node | null>(null);

  const [selectedNodeType, setSelectedNodeType] = useState<NodeType>(
    NodeType.Start
  );

  const createGrid = () => {
    const newGrid: Node[][] = [];
    for (let row = 0; row < ROWS; row++) {
      const newRow: Node[] = [];
      for (let col = 0; col < COLS; col++) {
        if (row === 0 && col === 0) {
          const start = {
            row,
            col,
            type: NodeType.Start,
            status: NodeStatus.Unseen,
          };
          newRow.push(start);
          setStartNode(start);
        } else if (row === ROWS - 1 && col === COLS - 1) {
          const end = {
            row,
            col,
            type: NodeType.End,
            status: NodeStatus.Unseen,
          };
          newRow.push(end);
          setEndNode(end);
        } else {
          newRow.push(createNode(row, col, NodeType.Blank, NodeStatus.Unseen));
        }
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  const clearGrid = () => {
    setGrid((prevGrid) => {
      return prevGrid.map((row) =>
        row.map((node) => {
          if (node.type !== NodeType.Start && node.type !== NodeType.End) {
            return { ...node, type: NodeType.Blank, status: NodeStatus.Unseen };
          }
          return node;
        })
      );
    });
  };

  const updateNodeType = (row: number, col: number, type: NodeType) => {
    setGrid((prevGrid) => {
      if (type === NodeType.Start) {
        prevGrid = prevGrid.map((gridRow) =>
          gridRow.map((node) =>
            node.type === NodeType.Start
              ? { ...node, type: NodeType.Blank, status: NodeStatus.Unseen }
              : node
          )
        );
        setStartNode(prevGrid[row][col]);
      }
      if (type === NodeType.End) {
        prevGrid = prevGrid.map((gridRow) =>
          gridRow.map((node) =>
            node.type === NodeType.End
              ? { ...node, type: NodeType.Blank }
              : node
          )
        );
        setEndNode(prevGrid[row][col]);
      }

      if (type === NodeType.Wall) {
        return prevGrid.map((gridRow, rowIndex) =>
          gridRow.map((node, colIndex) =>
            rowIndex === row &&
            colIndex === col &&
            node.type !== NodeType.Start &&
            node.type !== NodeType.End
              ? { ...node, type: NodeType.Wall }
              : node
          )
        );
      }

      return prevGrid.map((gridRow, rowIndex) =>
        gridRow.map((node, colIndex) =>
          rowIndex === row && colIndex === col ? { ...node, type } : node
        )
      );
    });
  };

  return (
    <GridContext.Provider
      value={{
        grid,
        setGrid,
        createGrid,
        clearGrid,
        startNode,
        endNode,
        ROWS,
        COLS,
        selectedNodeType,
        setSelectedNodeType,
        updateNodeType,
      }}
    >
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
