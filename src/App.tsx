import { useState } from "react";
import "./App.css";

import Calculator from "@mrborek/calculator-lib";
import CalcButton from "./components/CalcButton.tsx";
import Case from "./components/Case.tsx";
import Display from "./components/Display.tsx";

const calculator = new Calculator();
const CALCULATOR_OPERANDS = { first: 1, second: 2 };

function App() {
  const [count, setCount] = useState(0);

  const buttons = [
    ["C", "", "", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "", ".", "="],
  ];

  const calculateAndSetCount = () => {
    const result = calculator.add(
      CALCULATOR_OPERANDS.first,
      CALCULATOR_OPERANDS.second,
    );
    setCount(Number(result));
  };

  return (
    <>
      <section className="max-w-3xl mx-auto h-full mt-8">
        <h1 className="text-center text-2xl">Calculator</h1>
        <div className="flex flex-col justify-center items-center mt-4">
          {false && (
            <>
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>

              <button onClick={calculateAndSetCount}>calc</button>
            </>
          )}

          <Case>
            <Display className="adf">{count}</Display>

            <CalcButton>1</CalcButton>
          </Case>
        </div>
      </section>
    </>
  );
}

export default App;
