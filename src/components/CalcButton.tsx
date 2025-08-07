import type { ReactNode } from "react";

interface CalcButtonProps {
  children: ReactNode;
  disabled?: boolean;
  char: string;
  onClick?: () => void;
}

export default function CalcButton({
  children,
  disabled,
  char,
}: CalcButtonProps) {
  function handleClick() {
    if (disabled) return;
    console.info("char", char);
  }

  return (
    <button
      className={`text-2xl w-[60px] h-[60px] ${!disabled && "cursor-pointer"}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
