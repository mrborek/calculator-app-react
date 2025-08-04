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
      className={`w-[280px] h-[60px] border-red-100 border flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
