"use client";
import Grid from "@/components/Grid/Grid";
import ControlPanel from "@/components/ControlPanel/ControlPanel";
import { useEffect } from "react";
import { useGrid } from "@/context/GridProvider";

const PathFinder = () => {
  const { createGrid, grid } = useGrid();

  useEffect(() => {
    if (grid.length === 0) {
      createGrid();
    }
  }, []);
  return (
    <>
      <ControlPanel>
        <Grid />
      </ControlPanel>
    </>
  );
};

export default PathFinder;
