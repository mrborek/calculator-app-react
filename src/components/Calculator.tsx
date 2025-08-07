import type { ReactNode } from "react";

import CalcButton from "../components/CalcButton.tsx";
import Case from "../components/Case.tsx";
import Display from "../components/Display.tsx";

interface CalcButtonProps {
  children?: ReactNode;
  count: number;
}

interface ButtonOptions {
  disabled?: boolean;
  type?: string;
  size?: "default" | "2x" | "2xh";
}

export default function Calculator({ count }: CalcButtonProps) {
  const calculatorKeyboard = [
    [
      registerButton("C", { type: "clear", size: "2x" }),
      registerButton("÷", { type: "inputOperator" }),
      registerButton("*", { type: "inputOperator" }),
    ],
    [
      registerButton("7", { type: "inputNumber" }),
      registerButton("8", { type: "inputNumber" }),
      registerButton("9", { type: "inputNumber" }),
      registerButton("-", { type: "inputOperator" }),
    ],
    [
      registerButton("4", { type: "inputNumber" }),
      registerButton("5", { type: "inputNumber" }),
      registerButton("6", { type: "inputNumber" }),
      registerButton("+", { type: "inputOperator" }),
    ],
    [
      registerButton("1", { type: "inputNumber" }),
      registerButton("2", { type: "inputNumber" }),
      registerButton("3", { type: "inputNumber" }),
      registerButton("=", { type: "inputOperator", size: "2xh" }),
    ],
    [
      registerButton("0", { type: "inputNumber", size: "2x" }),
      registerButton(".", { type: "inputNumber" }),
    ],
  ];

  function registerButton(char: string, options?: ButtonOptions) {
    return {
      char,
      disabled: options?.disabled || false,
      type: options?.type,
      size: options?.size,
    };
  }

  return (
    <Case>
      <Display>{count}</Display>

      <div className=" p-6 w-full">
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
