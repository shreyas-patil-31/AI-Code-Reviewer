import Editor from "@monaco-editor/react";

function CodeEditor({ language, code, setCode }) {

  return (
    <div className="mt-8">

      <Editor
        height="500px"
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
      />

    </div>
  );
}

export default CodeEditor;