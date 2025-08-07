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
}

export default function Calculator({ count }: CalcButtonProps) {
  const calculatorKeyboard = [
    [
      registerButton("C"),
      registerButton("", { disabled: true }),
      registerButton("", { disabled: true }),
      registerButton("/"),
    ],
    [
      registerButton("7"),
      registerButton("8"),
      registerButton("9"),
      registerButton("*"),
    ],
    [
      registerButton("4"),
      registerButton("5"),
      registerButton("6"),
      registerButton("-"),
    ],
    [
      registerButton("1"),
      registerButton("2"),
      registerButton("3"),
      registerButton("+"),
    ],
    [
      registerButton("0"),
      registerButton("", { disabled: true }),
      registerButton("."),
      registerButton("="),
    ],
  ];

  function registerButton(char: string, options?: ButtonOptions) {
    return { char, disabled: options?.disabled || false };
  }

  return (
    <Case>
      <Display className="">{count}</Display>

      <div
        className="flex gap-1 mt-10 flex-wrap justify-center"
        style={{ maxWidth: "300px" }}
      >
        {calculatorKeyboard[0].map((button, i) => {
          return (
            <CalcButton key={i} disabled={button.disabled}>
              {button.char}
            </CalcButton>
          );
        })}
        {calculatorKeyboard[1].map((button, i) => {
          return <CalcButton key={i}>{button.char}</CalcButton>;
        })}
        {calculatorKeyboard[2].map((button, i) => {
          return <CalcButton key={i}>{button.char}</CalcButton>;
        })}
        {calculatorKeyboard[3].map((button, i) => {
          return <CalcButton key={i}>{button.char}</CalcButton>;
        })}
        {calculatorKeyboard[4].map((button, i) => {
          return (
            <CalcButton key={i} disabled={button.disabled}>
              {button.char}
            </CalcButton>
          );
        })}
      </div>
    </Case>
  );
}
