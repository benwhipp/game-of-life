"use client";
import { useState, useCallback, useEffect } from "react";

export type RowType = boolean[] & { length: 64 };
export type GridType = RowType[] & { length: 64 };

export const useGridState = () => {
  const [grid, setGridState] = useState<GridType>(
    [...Array(64)].map(() => [...Array(64)].map(() => false)) as GridType,
  );
  const [playing, setPlaying] = useState(false);

  const advanceGrid = useCallback(() => {
    // @ts-expect-error - Stupid TS
    setGridState((grid) => {
      const newGrid = grid.map((row, i) =>
        row.map((cell, j) => {
          const neighbors = [
            grid[i - 1]?.[j - 1],
            grid[i - 1]?.[j],
            grid[i - 1]?.[j + 1],
            grid[i]?.[j - 1],
            grid[i]?.[j + 1],
            grid[i + 1]?.[j - 1],
            grid[i + 1]?.[j],
            grid[i + 1]?.[j + 1],
          ].filter(Boolean).length;

          if (cell) {
            return neighbors === 2 || neighbors === 3;
          } else {
            return neighbors === 3;
          }
        }),
      );

      return newGrid;
    });
  }, []);

  const updateCell = useCallback((i: number, j: number) => {
    // @ts-expect-error - Stupid TS
    setGridState((grid) => {
      const newGrid = grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          if (rowIndex === i && cellIndex === j) {
            return !cell;
          } else {
            return cell;
          }
        }),
      );

      return newGrid;
    });
  }, []);

  const randomizeGrid = useCallback(() => {
    // @ts-expect-error - Stupid TS
    setGridState((grid) => {
      const newGrid = grid.map((row) => row.map(() => Math.random() > 0.5));

      return newGrid;
    });
  }, []);

  const resetGrid = useCallback((alive: boolean) => {
    // @ts-expect-error - Stupid TS
    setGridState((grid) => {
      const newGrid = grid.map((row) => row.map(() => alive));

      return newGrid;
    });
  }, []);

  useEffect(() => {
    if (playing) {
      const interval = setInterval(advanceGrid, 100);
      return () => clearInterval(interval);
    }
  }, [playing, advanceGrid]);

  return { grid, playing, setPlaying, updateCell, randomizeGrid, resetGrid };
};
