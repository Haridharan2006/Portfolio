function TechChip({ children }) {
  return (
    <div className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10">
      {children}
    </div>
  );
}

export default TechChip;