import { Node, NodeType, NodeStatus } from "@/types/types";
import sleep from "@/app/utils/utils";

export const BFS = async (
  grid: Node[][],
  start: Node,
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  ROWS: number,
  COLS: number
) => {
  const visited = new Set<Node>();
  const queue: Node[] = [start];
  const parentMap: Map<Node, Node | null> = new Map();

  while (queue.length !== 0) {
    let current_node = queue.shift();
    if (!current_node) continue;

    if (current_node.type === NodeType.End) {
      getPath(current_node, parentMap, setGrid);
      break;
    }

    if (!visited.has(current_node)) {
      visited.add(current_node);
      current_node.status = NodeStatus.Seen;

      setGrid((prevGrid) =>
        prevGrid.map((row) =>
          row.map((node) =>
            node.row === current_node.row && node.col === current_node.col
              ? { ...node, status: NodeStatus.Seen }
              : node
          )
        )
      );

      await sleep(100);

      const neighbours = getNeighbours(grid, current_node, ROWS, COLS);
      neighbours.forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
          parentMap.set(neighbour, current_node);
        }
      });
    }
  }
};

const getNeighbours = (
  grid: Node[][],
  parent: Node,
  ROWS: number,
  COLS: number
): Node[] => {
  const neighbours: Node[] = [];
  const { row, col } = parent;

  const directions = [
    { rowOffset: -1, colOffset: 0 }, // Up
    { rowOffset: 1, colOffset: 0 }, // Down
    { rowOffset: 0, colOffset: -1 }, // Left
    { rowOffset: 0, colOffset: 1 }, // Right
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

const getPath = (
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
          rowIndex === node.row && colIndex === node.col
            ? { ...n, type: NodeType.Path }
            : n
        )
      );
      return newGrid;
    });
  });
};
