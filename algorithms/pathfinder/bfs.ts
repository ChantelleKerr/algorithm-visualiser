import { Node, NodeType, NodeStatus } from "@/types/types";
import { getNeighbours, getPath } from "@/algorithms/helper";
import sleep from "@/utils/utils";

export const BFS = async (
  grid: Node[][],
  startNode: Node | null,
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  ROWS: number,
  COLS: number
) => {
  if (startNode === null) return;
  const visited = new Set<Node>();
  const queue: Node[] = [startNode];
  const parentMap: Map<Node, Node | null> = new Map();

  while (queue.length !== 0) {
    let current = queue.shift();
    if (!current) continue;

    if (current.type === NodeType.End) {
      getPath(current, parentMap, setGrid);
      break;
    }

    if (!visited.has(current)) {
      visited.add(current);
      current.status = NodeStatus.Seen;

      setGrid((prevGrid) =>
        prevGrid.map((row) =>
          row.map((node) =>
            node.row === current.row && node.col === current.col
              ? { ...node, status: NodeStatus.Seen }
              : node
          )
        )
      );

      await sleep(100);

      const neighbours = getNeighbours(grid, current, ROWS, COLS);
      neighbours.forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
          parentMap.set(neighbour, current);
        }
      });
    }
  }
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
