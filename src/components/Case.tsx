import type { ReactNode } from "react";

export default function Case({ children }: { children: ReactNode }) {
  return (
    <div className="w-[320px]  border pt-6 rounded mx-auto">{children}</div>
  );
}
