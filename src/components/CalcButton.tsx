import type { ReactNode } from "react";

interface CalcButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

export default function CalcButton({ children, disabled }: CalcButtonProps) {
  return (
    <button
      className={`text-2xl w-[60px] h-[60px] ${!disabled && "cursor-pointer"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
