function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          AI Code Reviewer
        </h1>

        <p className="text-gray-300">
          Powered by Gemini AI
        </p>
      </div>
    </nav>
  );
}

export default Navbar;