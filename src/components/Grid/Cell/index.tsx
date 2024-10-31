interface CellProps {
  alive: boolean;
  updateCell: () => void;
}

export const Cell = ({ alive, updateCell }: CellProps) => {
  return (
    <button
      className={`group aspect-square w-full bg-gray-900 p-[1px]`}
      onClick={() => {
        updateCell();
      }}
      onMouseEnter={(e) => {
        if (e.buttons === 1) {
          updateCell();
        }
      }}
    >
      <div
        className={`duration-50 z-10 h-full w-full overflow-visible rounded-sm transition-all ${
          alive
            ? "bg-yellow-300 group-hover:bg-red-400"
            : "bg-gray-700 group-hover:bg-yellow-100"
        } cell`}
      ></div>
    </button>
  );
};
