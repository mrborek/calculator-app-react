import type { ReactNode } from "react";

import CalcButton from "../components/CalcButton.tsx";
import Case from "../components/Case.tsx";
import Display from "../components/Display.tsx";
import type {
  CalculatorState,
  OperationType,
} from "../state/calculator.state.ts";
import { watch } from "../hooks/useWatch.ts";

interface CalcButtonProps {
  children?: ReactNode;
  calculatorState: CalculatorState;
}

interface ButtonOptions {
  disabled?: boolean;
  type?: string;
  size?: "default" | "2x" | "2xh";
  operation: OperationType;
}

export default function Calculator({ calculatorState }: CalcButtonProps) {
  watch(calculatorState.query, (newQuery) => {
    console.info("newQuery", newQuery);
    console.info(
      "calculatorState.operationHistory",
      calculatorState.operationHistory,
    );
  });

  const calculatorKeyboard = [
    [
      registerButton("C", { type: "clear", size: "2x", operation: "clear" }),
      registerButton("÷", { type: "inputOperator", operation: "divide" }),
      registerButton("*", { type: "inputOperator", operation: "multiply" }),
    ],
    [
      registerButton("7", { type: "inputNumber", operation: "input" }),
      registerButton("8", { type: "inputNumber", operation: "input" }),
      registerButton("9", { type: "inputNumber", operation: "input" }),
      registerButton("-", { type: "inputOperator", operation: "subtract" }),
    ],
    [
      registerButton("4", { type: "inputNumber", operation: "input" }),
      registerButton("5", { type: "inputNumber", operation: "input" }),
      registerButton("6", { type: "inputNumber", operation: "input" }),
      registerButton("+", { type: "inputOperator", operation: "add" }),
    ],
    [
      registerButton("1", { type: "inputNumber", operation: "input" }),
      registerButton("2", { type: "inputNumber", operation: "input" }),
      registerButton("3", { type: "inputNumber", operation: "input" }),
      registerButton("=", {
        type: "inputOperator",
        size: "2xh",
        operation: "calculate",
      }),
    ],
    [
      registerButton("0", {
        type: "inputNumber",
        size: "2x",
        operation: "input",
      }),
      registerButton(".", { type: "inputNumber", operation: "dot" }),
    ],
  ];

  function registerButton(char: string, options: ButtonOptions) {
    return {
      char,
      disabled: options?.disabled || false,
      type: options?.type,
      size: options?.size,
      operation: options?.operation,
    };
  }

  return (
    <Case>
      <div className="px-6 bg-white rounded-2xl">
        <Display>{calculatorState.query}</Display>
      </div>

      <div className="p-6 w-full">
        <div className="grid grid-cols-4 gap-2 w-full">
          {calculatorKeyboard.map((row) => {
            return row.map((button, i) => {
              return (
                <CalcButton
                  key={i}
                  disabled={button.disabled}
                  char={button.char}
                  type={button.type}
                  size={button.size}
                  operation={button.operation}
                  onClick={() => {
                    console.info(button);
                    calculatorState.setQuery(button.operation, button.char);
                  }}
                >
                  {button.char}
                </CalcButton>
              );
            });
          })}
        </div>
      </div>
    </Case>
  );
}
