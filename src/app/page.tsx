"use client";
import { useState } from "react";
import { useGridState } from "@/hooks/useGridState";
import { Grid } from "@/components/Grid";
import { Button } from "@/components/Button";
import { Cell } from "@/components/Grid/Cell";

const Home = () => {
  const { grid, playing, setPlaying, updateCell, resetGrid, randomizeGrid } =
    useGridState();
  const [resetAlive, setResetAlive] = useState(false);

  return (
    <div className="box-border flex h-screen w-screen flex-col-reverse items-center justify-center gap-8 bg-gray-800 p-4 sm:flex-row">
      <div className="flex flex-col-reverse gap-4 sm:flex-col">
        <h1>Conway&apos;s Game of Life</h1>
        <div className="flex flex-col gap-4">
          <Button onClick={() => setPlaying(!playing)}>
            {playing ? "Stop" : "Start"}
          </Button>
          <div className="flex gap-4">
            <Button onClick={() => resetGrid(resetAlive)}>Reset</Button>
            <div className="flex w-full flex-col items-center gap-2">
              <Cell
                alive={resetAlive}
                updateCell={() => {
                  setResetAlive(!resetAlive);
                }}
              />
              <label>Set all {}</label>
            </div>
          </div>
          <Button onClick={randomizeGrid}>Randomise</Button>
        </div>
      </div>
      <Grid grid={grid} updateCell={updateCell} />
    </div>
  );
};

export default Home;
