import type { BaseStep, DataStructureConfig } from '../types';
import { DEFAULT_CONFIG } from '../types';

export interface StackStep extends BaseStep {
  array: number[];
  top: number;
  operation: 'push' | 'pop' | 'idle';
  operationValue?: number;
}

export const generateRandomData = (
  config: DataStructureConfig = {}
): number[] => {
  const { initialSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const stackSize = Math.floor(Math.random() * initialSize) + 3;
  return Array.from(
    { length: stackSize },
    () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  );
};

export const generateSteps = (
  initialStack: number[],
  config: DataStructureConfig = {}
): StackStep[] => {
  const { maxSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const steps: StackStep[] = [];

  steps.push({
    array: [...initialStack],
    top: initialStack.length - 1,
    operation: 'idle',
    highlightedLine: 0,
  });

  const operations = Math.floor(Math.random() * 5) + 5;
  const currentStack = [...initialStack];

  for (let i = 0; i < operations; i++) {
    const canPush = currentStack.length < maxSize;
    const canPop = currentStack.length > 0;

    if (!canPop || (canPush && Math.random() > 0.5)) {
      const value =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        highlightedLine: 5,
      });

      currentStack.push(value);
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'push',
        operationValue: value,
        highlightedLine: 6,
      });

      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        highlightedLine: 0,
      });
    } else {
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        highlightedLine: 9,
      });

      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        highlightedLine: 10,
      });

      const poppedValue = currentStack[currentStack.length - 1];
      currentStack.pop();
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'pop',
        operationValue: poppedValue,
        highlightedLine: 13,
      });

      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        highlightedLine: 0,
      });
    }
  }

  return steps;
};
