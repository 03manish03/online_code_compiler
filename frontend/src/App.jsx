import { useState } from "react";
import axios from "axios";
import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSelector";
import OutputBox from "./components/OutputBox";

function App() {

  const [language, setLanguage] = useState("python");

  const [code, setCode] = useState(
    "print('Hello World')"
  );

  const [output, setOutput] = useState("");

  const runCode = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/execute",
        {
          language,
          code,
        }
      );

      setOutput(response.data.output);

    } catch (error) {

      setOutput("Error running code");

    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Online Code Compiler</h1>

      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
      />

      <CodeEditor
        code={code}
        setCode={setCode}
        language={language}
      />

      <br />

      <button onClick={runCode}>
        Run Code
      </button>

      <OutputBox output={output} />

    </div>
  );
}

export default App;