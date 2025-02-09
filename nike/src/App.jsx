import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold ">Hello world!</h1>
      <h2 className="text-lg font-semi-bold"> lunds MUJI</h2>
    </>
  );
}

export default App;
