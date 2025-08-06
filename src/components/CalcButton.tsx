import type { ReactNode } from "react";

interface CalcButtonProps {
  children: ReactNode;
}

export default function CalcButton({ children }: CalcButtonProps) {
  return <button className="text-2xl w-[60px] h-[60px] cursor-pointer">{children}</button>;
}
