"use client";
import Grid from "@/components/Grid/Grid";
import ControlPanel from "@/components/ControlPanel/ControlPanel";
import Legend from "@/components/Grid/Legend";
import useGrid from "@/hooks/UseGrid";
import { useEffect } from "react";

const PathFinder = () => {
  const { createGrid, grid, setGrid, ROWS, COLS } = useGrid();

  useEffect(() => {
    if (grid.length === 0) {
      createGrid();
    }
  }, []);
  return (
    <>
      <ControlPanel
        grid={grid}
        setGrid={setGrid}
        rows={ROWS}
        cols={COLS}
        createGrid={createGrid}
      >
        <Grid grid={grid} rows={ROWS} cols={COLS} />
      </ControlPanel>
    </>
  );
};

export default PathFinder;
