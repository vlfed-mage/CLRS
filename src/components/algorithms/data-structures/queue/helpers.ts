import type { BaseStep, DataStructureConfig } from '../types';
import { DEFAULT_CONFIG } from '../types';

export interface QueueStep extends BaseStep {
  array: number[];
  front: number;
  rear: number;
  operation: 'enqueue' | 'dequeue' | 'idle';
  operationValue?: number;
}

export const generateRandomData = (
  config: DataStructureConfig = {}
): number[] => {
  const { initialSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const queueSize = Math.floor(Math.random() * initialSize) + 3;
  return Array.from(
    { length: queueSize },
    () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  );
};

export const generateSteps = (
  initialQueue: number[],
  config: DataStructureConfig = {}
): QueueStep[] => {
  const { maxSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const steps: QueueStep[] = [];

  steps.push({
    array: [...initialQueue],
    front: 0,
    rear: initialQueue.length - 1,
    operation: 'idle',
    highlightedLine: 0,
  });

  const operations = Math.floor(Math.random() * 5) + 5;
  const currentQueue = [...initialQueue];
  let front = 0;
  let rear = initialQueue.length - 1;

  for (let i = 0; i < operations; i++) {
    const currentSize = rear - front + 1;
    const canEnqueue = currentQueue.length < maxSize;
    const canDequeue = currentSize > 0;

    if (!canDequeue || (canEnqueue && Math.random() > 0.5)) {
      const value =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        highlightedLine: 5,
      });

      rear++;
      currentQueue.push(value);
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'enqueue',
        operationValue: value,
        highlightedLine: 6,
      });

      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        highlightedLine: 0,
      });
    } else {
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        highlightedLine: 9,
      });

      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        highlightedLine: 10,
      });

      const dequeuedValue = currentQueue[front];
      front++;
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'dequeue',
        operationValue: dequeuedValue,
        highlightedLine: 13,
      });

      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        highlightedLine: 0,
      });
    }
  }

  return steps;
};
