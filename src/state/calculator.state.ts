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

interface OperationHistory {
  operation: OperationType;
  value: string;
}

export interface CalculatorState {
  result: number;
  a: string;
  b: string;
  query: string;
  operationHistory: OperationHistory[];
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
  operationHistory: [],
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
        ...state,
        count: newCount,
        operation: state.operation,
      };
    }),
  setQuery: (operation: OperationType, value: string) =>
    set((state) => {
      // Build the query string based on the operation and current state
      let newQuery = state.query;

      const prevValue = state.query.at(-1) || "";

      function includesOneOf(_query: string, valuesToCheck: string[]) {
        let includes = false;

        valuesToCheck.forEach((valueToCheck) => {
          if (_query.includes(valueToCheck)) {
            includes = true;
          }
        });

        return includes;
      }

      const updatedOperationHistory: OperationHistory[] =
        state.operationHistory;

      switch (operation) {
        case "input":
          newQuery = state.query + value;
          break;
        case "clear":
          newQuery = "";
          break;
        case "dot":
          if (!state.query.includes(".")) {
            newQuery = state.query + ".";
            updatedOperationHistory.push({ operation, value });
          }
          break;
        case "add":
          if (prevValue !== "+" && !includesOneOf(prevValue, ["-", "*", "/"])) {
            newQuery = state.query + "+";
            updatedOperationHistory.push({ operation, value });
          }
          break;
        case "subtract":
          if (prevValue !== "-" && !includesOneOf(prevValue, ["+", "*", "/"])) {
            newQuery = state.query + "-";
            updatedOperationHistory.push({ operation, value });
          }
          break;
        case "multiply":
          if (prevValue !== "*" && !includesOneOf(prevValue, ["+", "-", "/"])) {
            newQuery = state.query + "*";
            updatedOperationHistory.push({ operation, value });
          }
          break;
        case "divide":
          if (prevValue !== "/" && !includesOneOf(prevValue, ["+", "-", "*"])) {
            newQuery = state.query + "/";
            updatedOperationHistory.push({ operation, value });
          }
          break;
        case "calculate":
          // Keep the current query for calculation display
          break;
        default:
          newQuery = state.query + value;
      }

      return {
        ...state,
        operationHistory: updatedOperationHistory,
        query: newQuery,
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
