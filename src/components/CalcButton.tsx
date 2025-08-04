import type { ReactNode } from "react";

interface CalcButtonProps {
  children: ReactNode;
}

export default function CalcButton({ children }: CalcButtonProps) {
  return <button className="text-2xl">{children}</button>;
}
