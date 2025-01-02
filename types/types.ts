export enum NodeType {
  Start = "Start",
  End = "End",
  Blank = "Blank",
  Obstacle = "Obstacle",
  Path = "Path",
}

export enum NodeStatus {
  Seen = "Seen",
  Unseen = "Unseen",
}

export interface Node {
  row: number;
  col: number;
  type: NodeType;
  status: NodeStatus;
}

export interface GridContainerProps {
  rows: number;
  cols: number;
}
