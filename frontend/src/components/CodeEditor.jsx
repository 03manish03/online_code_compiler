import Editor from "@monaco-editor/react";

function CodeEditor({
  code,
  setCode,
  language,
}) {

  return (
    <Editor
      height="400px"
      language={language}
      value={code}
      onChange={(value) => setCode(value)}
    />
  );
}

export default CodeEditor;