import { Node, NodeType, NodeStatus } from "@/types/types";
import sleep from "@/utils/utils";

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

export const pseudocodeBFS: string = `function bfs(graph, start):
  visited = ()
  queue = [start]
  while queue is not empty:
    current = queue.shift()
    if current is end:
      break;
    if current is not in visited:
      visited.add(current)
      for each neighbour:
        if neighbour not in visited:
          queue.push(neightbour)`;

export const descriptionBFS: string = `An algorithm used to traverse or search through graph or tree
            structures. It starts at a given node, exploring all its immediate
            neighbours before moving on to the neighbours of those nodes,
            proceeding level by level. BFS uses a queue to keep track of nodes
            to visit, ensuring each node is visited in the shortest possible
            path from the start node in unweighted graphs. Its time complexity
            is 𝑂(𝑉+𝐸), where 𝑉 represents vertices and 𝐸 represents edges.`;
