function LanguageSelector({ language, setLanguage }) {

  return (

    <div className="w-full max-w-4xl mx-auto mt-8">

      <label className="block text-lg font-bold text-slate-700 mb-2">
        Select Programming Language
      </label>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-3 rounded-xl border-2 border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >

        <option value="cpp">C++</option>

        <option value="java">Java</option>

        <option value="python">Python</option>

        <option value="javascript">JavaScript</option>

        <option value="c">C</option>

      </select>

    </div>

  );
}

export default LanguageSelector;