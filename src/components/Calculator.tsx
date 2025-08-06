import type { ReactNode } from "react";

import CalcButton from "../components/CalcButton.tsx";
import Case from "../components/Case.tsx";
import Display from "../components/Display.tsx";


interface CalcButtonProps {
  children?: ReactNode;
  count: number
}

export default function Calculator({ count  }: CalcButtonProps) {
    const buttons = [
        ["C", "", "", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", "", ".", "="],
      ];

  return   <Case>
  <Display className="">{count}</Display>

  <div className="flex gap-1 mt-10 flex-wrap justify-center" style={{maxWidth: '300px'}}>
  {buttons[0].map(n=>{
    return <CalcButton>{n}</CalcButton>
  })}
  {buttons[1].map(n=>{
    return <CalcButton>{n}</CalcButton>
  })}
  {buttons[2].map(n=>{
    return <CalcButton>{n}</CalcButton>
  })}
  {buttons[3].map(n=>{
    return <CalcButton>{n}</CalcButton>
  })}
    {buttons[4].map(n=>{
    return <CalcButton>{n}</CalcButton>
  })}
  </div>
  
</Case>
}
