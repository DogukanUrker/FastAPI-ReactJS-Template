import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import fastAPILogo from "./assets/fastapi.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState({
    message: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data").then((res) =>
      res.json().then((data) => {
        setdata({
          message: data.message,
        });
      })
    );
  }, []);

  return (
    <>
      <div>
        <a href="https://fastapi.tiangolo.com/" target="_blank">
          <img src={fastAPILogo} className="logo fastAPI" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FastAPI + ReactJS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="backendMessage">
          {data.message} <code>backend/app.py</code>
        </p>
        <p>
          Edit <code>frontend/src/App.jsx</code> and save to test HMR.
        </p>
        <p>
          Built with
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </a>
        </p>
        <a href="http://github.com/dogukanurker" target="blank">
          <small>Dogukan Urker</small>
        </a>
        <p className="read-the-docs">Click on the logos to learn more.</p>
      </div>
    </>
  );
}

export default App;
