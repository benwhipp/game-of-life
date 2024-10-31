"use client";
import { Fragment, memo } from "react";
import { type GridType } from "@/hooks/useGridState";
import { Cell } from "@/components/Grid/Cell";

interface GridProps {
  grid: GridType;
  updateCell: (i: number, j: number) => void;
}

const GridComponent = ({ grid, updateCell }: GridProps) => {
  return (
    <div className="grid aspect-square h-full max-h-full w-full max-w-full grid-cols-[repeat(64,minmax(0,1fr))] grid-rows-[repeat(64,minmax(0,1fr))] border-2 border-gray-500 p-1">
      {grid.map((row, i) => (
        <Fragment key={`row-${i}`}>
          {row.map((cell: boolean, j: number) => (
            <Cell
              alive={cell}
              updateCell={() => updateCell(i, j)}
              key={`cell-${i}-${j}`}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export const Grid = memo(GridComponent);
