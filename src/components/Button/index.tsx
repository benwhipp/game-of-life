interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-slate-600 bg-slate-800 px-4 py-2 font-bold text-white transition-all hover:border-slate-800 hover:bg-slate-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
