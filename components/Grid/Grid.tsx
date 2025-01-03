"use client";
import { GridContainer, GridItem } from "@/styles/Grid.styles";
import { Node } from "@/types/types";

interface Props {
  grid: Node[][];
  rows: number;
  cols: number;
}

const Grid = ({ grid, rows, cols }: Props) => {
  const handleNodeClick = (row: number, col: number) => {
    console.log(row, col);
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <GridContainer rows={rows} cols={cols}>
          {grid.map((row, rowIndex) =>
            row.map((node, colIndex) => (
              <GridItem
                key={`${rowIndex}-${colIndex}`}
                nodetype={node.type}
                nodestatus={node.status}
              />
            ))
          )}
        </GridContainer>
      </div>
    </>
  );
};

export default Grid;
