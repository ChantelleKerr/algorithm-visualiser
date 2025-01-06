"use client";
import { GridContainer, GridItem } from "@/styles/Grid.styles";
import { Node } from "@/types/types";
import Legend from "@/components/Grid/Legend";
import { useGrid } from "@/context/GridProvider";

const Grid = () => {
  const { grid, ROWS, COLS } = useGrid();
  const handleNodeClick = (row: number, col: number) => {
    // if node selector is none -- return
    console.log(row, col);
    // Get the selected node
    // update that node to whatever the node selector is
    // rules: only one node for start and node. Wall can have multiple nodes
    // update grid UI
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Legend />
        <GridContainer rows={ROWS} cols={COLS}>
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
