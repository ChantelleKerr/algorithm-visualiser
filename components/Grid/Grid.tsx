"use client";
import { NodeType, NodeStatus, GridContainerProps } from "../../types/types";
import useGrid from "../../app/hooks/UseGrid";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BFS } from "@/algorithms/pathfinder/bfs";

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);

  padding: 10px;
  max-width: 80vw;
`;

const GridItem = styled.div<{ nodetype: NodeType; nodestatus: NodeStatus }>`
  border: 0.5px solid black;
  height: 50px;
  background-color: ${(props) => {
    switch (props.nodetype) {
      case NodeType.Start:
        return "#72D094";
      case NodeType.End:
        return "#EB7575";
      case NodeType.Obstacle:
        return "black";
      case NodeType.Path:
        return "#847996";
      case NodeType.Blank:
      default:
        switch (props.nodestatus) {
          case NodeStatus.Seen:
            return "#4ECDC4";
          case NodeStatus.Unseen:
          default:
            return "#292F36";
        }
    }
  }};
`;

const Grid = () => {
  const { grid, setGrid, createGrid, ROWS, COLS } = useGrid();

  if (grid.length === 0) createGrid();

  const handleNodeClick = (row: number, col: number) => {
    console.log(row, col);
  };

  const visualiseAlgorith = () => {
    BFS(grid, grid[0][0], setGrid, ROWS, COLS);
  };

  useEffect(() => {
    if (grid.length === 0) {
      createGrid();
    }
  }, []);

  return (
    <>
      <h1>PathFinder</h1>
      <Button onClick={visualiseAlgorith}>Visualise</Button>
      <Button> Stop</Button>
      <GridContainer rows={ROWS} cols={COLS}>
        {grid.map((row, rowIndex) =>
          row.map((node, colIndex) => (
            <GridItem
              key={`${rowIndex}-${colIndex}`}
              nodetype={node.type}
              nodestatus={node.status}
            ></GridItem>
          ))
        )}
      </GridContainer>
    </>
  );
};

export default Grid;
