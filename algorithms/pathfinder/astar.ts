import { Node, NodeType, NodeStatus } from "@/types/types";
import { getNeighbours, getPath, heuristic } from "@/algorithms/helper";
import sleep from "@/utils/utils";

export const AStar = async (
  grid: Node[][],
  startNode: Node | null,
  endNode: Node | null,
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  ROWS: number,
  COLS: number
) => {
  if (startNode === null || endNode === null) return;

  const visited = new Set<Node>();
  const parentMap: Map<Node, Node | null> = new Map();
  const gCosts: Map<Node, number> = new Map();
  const priorityQueue: { node: Node; fCost: number }[] = [];

  gCosts.set(startNode, 0);
  priorityQueue.push({ node: startNode, fCost: heuristic(startNode, endNode) });

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a.fCost - b.fCost);
    const { node: current } = priorityQueue.shift()!;
    if (current.type === NodeType.End) {
      getPath(current, parentMap, setGrid);
      break;
    }

    if (!visited.has(current)) {
      visited.add(current);

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
        if (visited.has(neighbour)) return;

        const g = (gCosts.get(current) || 0) + 1;
        if (g < (gCosts.get(neighbour) || Infinity)) {
          gCosts.set(neighbour, g);
          parentMap.set(neighbour, current);

          const fCost = g + heuristic(neighbour, endNode);
          priorityQueue.push({ node: neighbour, fCost });
        }
      });
    }
  }
};

export const pseudocodeAStar: string = `function h(node, end):
  return difference in node and end row + difference in node and end col


function AStar(graph, start, end):
  visited = ()
  priorityQueue: { node: Node; fCost: number }[] = []
  gCosts = Map<Node, number>(start, 0)
  fCost = h(start, end)
  priorityQueue.push(start, fCost)

  while priorityQueue is not empty:
    sort priorityQueue by fCost
    current = priorityQueue.shift()
    if current is end:
      break;
    if current is not in visited:
      visited.add(current)
      for each neighbour:
        if neighbour not in visited:
          calculate gCost of current node
          if gCost is less than neighbours gCost || Inf:
            gCost.set(neighbour, g)
            fCost = g + h(neighbour, end)
            priorityQueue.push({neighbour, fCost})`;

export const descriptionAStar: string = `A pathfinding and graph traversal algorithm that finds the shortest path between a start and an end node. 
It combines the strengths of Dijkstra's algorithm and a heuristic to prioritise exploring nodes that are likely to lead to the goal. 
A* calculates the cost of reaching a node (g) and estimates the remaining cost to the goal using a heuristic (h), 
summing them into a total cost (f = g + h). By balancing actual and estimated costs, A* efficiently finds optimal paths while avoiding unnecessary exploration.`;
