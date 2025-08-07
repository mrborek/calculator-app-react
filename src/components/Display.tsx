import type { ReactNode } from "react";

export default function Display({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-[60px] rounded flex justify-end items-center pr-3 text-2xl font-mono bg-black text-white ${className}`}
    >
      {children}
    </div>
  );
}
