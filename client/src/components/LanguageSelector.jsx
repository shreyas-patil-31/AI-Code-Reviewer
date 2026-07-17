function LanguageSelector({ language, setLanguage }) {

  return (

    <div className="w-full max-w-4xl mx-auto mt-8">

      <label className="block text-lg font-semibold mb-2">
        Select Programming Language
      </label>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
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