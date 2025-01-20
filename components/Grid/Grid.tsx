"use client";
import { GridContainer, GridItem } from "@/components/Grid/Grid.styles";
import { Node } from "@/types/types";
import Legend from "@/components/Legend";
import { useGrid } from "@/context/GridProvider";

const Grid = () => {
  const { grid, ROWS, COLS, selectedNodeType, updateNodeType } = useGrid();

  const legendItems = [
    { colour: "bg-green", label: "Start" },
    { colour: "bg-red", label: "End" },
    { colour: "bg-purple", label: "Path" },
    { colour: "bg-black", label: "Wall" },
    { colour: "bg-blue", label: "Visited" },
    { colour: "bg-white", label: "Unvisited" },
  ];

  const handleNodeClick = (node: Node) => {
    if (node === undefined) return;
    updateNodeType(node.row, node.col, selectedNodeType);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Legend items={legendItems} />
        <GridContainer rows={ROWS} cols={COLS}>
          {grid.map((row, rowIndex) =>
            row.map((node, colIndex) => (
              <GridItem
                key={`${rowIndex}-${colIndex}`}
                nodetype={node.type}
                nodestatus={node.status}
                onClick={() => handleNodeClick(node)}
                className="cursor-pointer"
              />
            ))
          )}
        </GridContainer>
      </div>
    </>
  );
};

export default Grid;
