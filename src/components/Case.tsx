import type { ReactNode } from "react";

export default function Case({ children }: { children: ReactNode }) {
  return (
    <div className="w-[320px] h-[480px] border-red-500 border flex flex-col items-center py-4">
      {children}
    </div>
  );
}
