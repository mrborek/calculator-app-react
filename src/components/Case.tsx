import type { ReactNode } from "react";

export default function Case({ children }: { children: ReactNode }) {
  return (
    <div className="w-[320px] border-red-500 border py-4 rounded mx-auto">
      {children}
    </div>
  );
}
