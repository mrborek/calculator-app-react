// import { useState } from "react";
import "./App.css";

// import CalculatorLib from "@mrborek/calculator-lib";
import Calculator from "./components/Calculator.tsx";
import { useCalculatorState } from "./state/calculator.state.ts";

// const calculator = new CalculatorLib();
// const CALCULATOR_OPERANDS = { first: 1, second: 2 };

function App() {
  // const [count] = useState(0);

  const calculatorState = useCalculatorState();

  // const calculateAndSetCount = () => {
  //   const result = calculator.add(
  //     CALCULATOR_OPERANDS.first,
  //     CALCULATOR_OPERANDS.second,
  //   );
  //   setCount(Number(result));
  // };

  return (
    <>
      <section className="max-w-3xl mx-auto h-full mt-8">
        <h1 className="text-center text-3xl font-medium">Calculator</h1>
        <div className="flex flex-col justify-center items-center mt-4">
          <Calculator calculatorState={calculatorState} />
        </div>
      </section>
    </>
  );
}

export default App;
