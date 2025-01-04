import { Node, NodeType, NodeStatus } from "@/types/types";

export const getNeighbours = (
  grid: Node[][],
  parent: Node,
  ROWS: number,
  COLS: number
): Node[] => {
  const neighbours: Node[] = [];
  const { row, col } = parent;

  const directions = [
    { rowOffset: -1, colOffset: 0 },
    { rowOffset: 1, colOffset: 0 },
    { rowOffset: 0, colOffset: -1 },
    { rowOffset: 0, colOffset: 1 },
  ];

  directions.forEach((direction) => {
    const newRow = row + direction.rowOffset;
    const newCol = col + direction.colOffset;
    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      neighbours.push(grid[newRow][newCol]);
    }
  });

  return neighbours;
};

export const getPath = (
  pathNode: Node,
  parentMap: Map<Node, Node | null>,
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>
) => {
  if (!pathNode) return;

  const path: Node[] = [];
  while (pathNode) {
    path.unshift(pathNode);
    const nextNode = parentMap.get(pathNode);
    if (nextNode === undefined || nextNode === null) {
      break;
    }
    pathNode = nextNode;
  }

  path.forEach((node) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row, rowIndex) =>
        row.map((n, colIndex) =>
          rowIndex === node.row &&
          colIndex === node.col &&
          node.type !== NodeType.Start &&
          node.type !== NodeType.End
            ? { ...n, type: NodeType.Path }
            : n
        )
      );
      return newGrid;
    });
  });
};
