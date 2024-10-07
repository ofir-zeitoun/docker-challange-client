import { useCallback, useState } from "react";
import { apiFetch } from "./api";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  const fetchNumber = useCallback(async () => {
    const res = await apiFetch("/get-number");
    const num = await res.json();
    setProgress(num);
  }, []);

  return (
    <>
      <h1>Docker Challenge</h1>

      <div className="card">
        <button onClick={fetchNumber}>get work done</button>
        <progress max="100" value={progress} />
        <label>{progress}%</label>
      </div>

      <p className="read-the-docs">
        <a
          href="https://github.com/ofir-zeitoun/docker-challenge-client"
          target="_blank"
        >
          https://github.com/ofir-zeitoun/docker-challenge-client
        </a>
      </p>

      <p className="read-the-docs">
        <a
          href="https://github.com/ofir-zeitoun/docker-challenge-server"
          target="_blank"
        >
          https://github.com/ofir-zeitoun/docker-challenge-server
        </a>
      </p>
    </>
  );
}

export default App;
