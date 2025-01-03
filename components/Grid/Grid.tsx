"use client";
import useGrid from "@/hooks/UseGrid";
import { GridContainer, GridItem } from "@/styles/Grid.styles";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BFS } from "@/algorithms/pathfinder/bfs";

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
