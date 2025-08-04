import { useState } from "react";
import "./App.css";

import Calculator from "@mrborek/calculator-lib";
import CalcButton from "./components/CalcButton.tsx";

const calculator = new Calculator();
const CALCULATOR_OPERANDS = { first: 1, second: 2 };

function App() {
  const [count, setCount] = useState(0);

  const calculateAndSetCount = () => {
    const result = calculator.add(
      CALCULATOR_OPERANDS.first,
      CALCULATOR_OPERANDS.second,
    );
    setCount(Number(result));
  };

  return (
    <>
      <section className="max-w-3xl mx-auto h-full ">
        <h1>Vite + React</h1>
        <div className="flex flex-col">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <button onClick={calculateAndSetCount}>calc</button>

          <CalcButton>1</CalcButton>
        </div>
      </section>
    </>
  );
}

export default App;
