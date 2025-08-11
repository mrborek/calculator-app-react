import { useEffect, useRef } from "react";

/**
 * Compares two arrays for shallow equality
 * @param currentArray - The current array to compare
 * @param previousArray - The previous array to compare against
 * @returns true if arrays are different, false if they are the same
 */
function hasArrayChanged<T>(currentArray: T[], previousArray: T[]): boolean {
  return currentArray.some(
    (currentValue, index) => currentValue !== previousArray[index],
  );
}

/**
 * useWatch - works like Vue 3's watch functionality
 * @param watchedValue - The value to watch for changes
 * @param changeCallback - Callback function called when value changes: (newValue, oldValue) => void
 */
export function useWatch<T>(
  watchedValue: T,
  changeCallback: (newValue: T, oldValue: T) => void,
): void {
  const previousValueRef = useRef<T>(watchedValue);

  useEffect(() => {
    const isArrayValue = Array.isArray(watchedValue);
    const previousValue = previousValueRef.current;

    const hasValueChanged = isArrayValue
      ? hasArrayChanged(watchedValue as unknown[], previousValue as unknown[])
      : watchedValue !== previousValue;

    if (hasValueChanged) {
      changeCallback(watchedValue, previousValue);
      previousValueRef.current = watchedValue;
    }
  }, [watchedValue, changeCallback]);
}
