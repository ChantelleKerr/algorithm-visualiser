"use client";
import { GridContainer, GridItem } from "@/styles/Grid.styles";
import { Node, NodeType } from "@/types/types";
import Legend from "@/components/Grid/Legend";
import { useGrid } from "@/context/GridProvider";

const Grid = () => {
  const { grid, ROWS, COLS, selectedNodeType, updateNodeType } = useGrid();
  const handleNodeClick = (node: Node) => {
    if (node === undefined) return;
    updateNodeType(node.row, node.col, selectedNodeType);
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
                onClick={() => handleNodeClick(node)}
              />
            ))
          )}
        </GridContainer>
      </div>
    </>
  );
};

export default Grid;
