function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-cyan-400">
          AI Code Reviewer
        </h1>

        <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold">
          Powered by AI
        </span>
      </div>
    </nav>
  );
}

export default Navbar;