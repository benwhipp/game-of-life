"use client";
import { useGridState } from "@/hooks/useGridState";
import { Grid } from "@/components/Grid";

const Home = () => {
  const { grid, playing, setPlaying, updateCell } = useGridState();

  return (
    <div className="size-screen flex items-center justify-center gap-8 bg-gray-800">
      <h1>Conway's Game of Life</h1>
      <Grid grid={grid} updateCell={updateCell} />
    </div>
  );
};

export default Home;
