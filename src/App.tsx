import { useState } from "react";
import "./App.css";

// import CalculatorLib from "@mrborek/calculator-lib";
import Calculator from "./components/Calculator.tsx";

// const calculator = new CalculatorLib();
// const CALCULATOR_OPERANDS = { first: 1, second: 2 };

function App() {
  const [count] = useState(0);

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
        <h1 className="text-center text-2xl">Calculator</h1>
        <div className="flex flex-col justify-center items-center mt-4">
          <Calculator count={count} />
        </div>
      </section>
    </>
  );
}

export default App;
