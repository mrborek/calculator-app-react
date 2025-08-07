import type { ReactNode } from "react";

interface CalcButtonProps {
  children: ReactNode;
  disabled?: boolean;
  char: string;
  onClick?: () => void;
  type?: string;
  size?: string;
  operation?: string;
}

export default function CalcButton({
  children,
  disabled,
  type,
  size,
  onClick,
}: CalcButtonProps) {
  function handleClick() {
    if (disabled) return;

    onClick?.();
  }

  const btnTypeClasses = setBtnClass(type);

  const btnSizeClasses = setSizeClasses(size);

  function setBtnClass(type?: string) {
    switch (type) {
      case "inputNumber":
        return "bg-gray-200 p-3 rounded hover:bg-gray-300";
      case "inputOperator":
        return "bg-orange-500 p-3 rounded hover:bg-orange-600 text-white";
      case "clear":
        return "bg-red-500 p-3 rounded hover:bg-red-600 text-white";
      default:
        return "";
    }
  }

  function setSizeClasses(size?: string) {
    switch (size) {
      case "default":
        return "";
      case "2x":
        return "col-span-2";
      case "2xh":
        return "row-span-2";
      default:
        return "";
    }
  }

  return (
    <button
      className={`text-2xl  ${!disabled && "cursor-pointer"} ${btnTypeClasses} ${btnSizeClasses}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
