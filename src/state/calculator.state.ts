import { create } from "zustand";
import type {} from "@redux-devtools/extension"; // required for devtools typing
// import CalculatorLib from "@mrborek/calculator-lib";

export type OperationType =
  | ""
  | "add"
  | "calculate"
  | "clear"
  | "divide"
  | "dot"
  | "input"
  | "multiply"
  | "subtract";

export interface CalculatorState {
  result: number;
  a: string;
  b: string;
  query: string;
  operation: OperationType;
  calculate: (value: number) => void;
  setOperation: (operation: OperationType) => void;
  setQuery: (operation: OperationType, value: string) => void;
}

export const useCalculatorState = create<CalculatorState>()((set) => ({
  result: 0,
  a: "",
  b: "",
  query: "",
  operation: "",
  calculate: (value: number) =>
    set((state) => {
      const newCount = (() => {
        switch (state.operation) {
          case "add":
            return state.result + value;
          case "subtract":
            return state.result - value;
          default:
            return state.result;
        }
      })();

      return {
        count: newCount,
        operation: state.operation,
      };
    }),
  setQuery: (operation: OperationType, value: string) =>
    set((state) => {
      return {
        operation,
      };
    }),
  setOperation: (operation: OperationType) =>
    set(() => {
      return {
        operation,
      };
    }),
  setA: (value: string) =>
    set((state) => {
      return {
        a: state.a + value,
      };
    }),
  setB: (value: string) =>
    set((state) => {
      return {
        b: state.b + value,
      };
    }),
}));
