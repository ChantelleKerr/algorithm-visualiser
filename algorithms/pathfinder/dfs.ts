import { Node, NodeType, NodeStatus } from "@/types/types";
import { getNeighbours, getPath } from "@/algorithms/helper";
import sleep from "@/utils/utils";

export const DFS = async (
  grid: Node[][],
  startNode: Node | null,
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  ROWS: number,
  COLS: number
) => {
  if (startNode === null) return;
  const visited = new Set<Node>();
  const stack: Node[] = [startNode];
  const parentMap: Map<Node, Node | null> = new Map();

  while (stack.length > 0) {
    let current = stack.pop();
    if (!current) break;

    if (current.type === NodeType.End) {
      getPath(current, parentMap, setGrid);
      break;
    }
    if (!visited.has(current)) {
      visited.add(current);
      current.status = NodeStatus.Seen;

      // TODO MOVE INTO GridProvider
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
          stack.push(neighbour);
          parentMap.set(neighbour, current);
        }
      });
    }
  }
};

export const pseudocodeDFS: string = `function dfs(graph, start):
  visited = ()
  stack = [start]
  while queue is not empty:
    current = stack.pop()
    if current is end:
      break;
    if current is not in visited:
      visited.add(current)
      for each neighbour:
        if neighbour not in visited:
          stack.push(neightbour)`;

export const descriptionDFS: string = `algorithm for traversing or searching through graph or tree structures.
        It starts at a given node and explores as far as possible along one branch before backtracking to explore other branches.
        DFS uses a stack (explicitly or via recursion) to keep track of the nodes being visited.
        Unlike BFS, it does not guarantee the shortest path in unweighted graphs. Its time complexity is 
        𝑂(𝑉+𝐸), where 𝑉 represents vertices and 𝐸 represents edges.`;
