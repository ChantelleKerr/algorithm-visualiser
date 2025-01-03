import { useState } from "react";
import { Node, NodeType, NodeStatus } from "@/types/types";

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

const useGrid = () => {
  const [grid, setGrid] = useState<Node[][]>([]);
  const ROWS = 10;
  const COLS = 10;
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
    console.log("EWFWEF ", newGrid);
    setGrid(newGrid);
  };

  return { grid, setGrid, createGrid, ROWS, COLS };
};

export default useGrid;
