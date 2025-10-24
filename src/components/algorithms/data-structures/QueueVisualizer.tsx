import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { DataStructureVisualizer } from '@/components/Visualizer';
import type { LegendItem } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface QueueStep {
  array: number[];
  front: number;
  rear: number;
  operation: 'enqueue' | 'dequeue' | 'idle';
  operationValue?: number;
  sorted: boolean;
  highlightedLine: number;
}

const CODE_LINES = [
  'class Queue {',
  '  constructor() {',
  '    this.items = [];',
  '  }',
  '',
  '  enqueue(element) {',
  '    this.items.push(element);',
  '  }',
  '',
  '  dequeue() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items.shift();',
  '  }',
  '',
  '  peek() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items[0];',
  '  }',
  '',
  '  isEmpty() {',
  '    return this.items.length === 0;',
  '  }',
  '',
  '  size() {',
  '    return this.items.length;',
  '  }',
  '}',
];

const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Queue Elements' },
  { color: 'bg-green-500', label: 'Front (Next to Dequeue)' },
  { color: 'bg-purple-500', label: 'Rear (Last Enqueued)' },
  { color: 'bg-gray-300', label: 'Empty/Dequeued' },
];

const generateRandomQueue = (size = 8): number[] => {
  const queueSize = Math.floor(Math.random() * size) + 3;
  return Array.from(
    { length: queueSize },
    () => Math.floor(Math.random() * 99) + 1
  );
};

const generateSteps = (initialQueue: number[]): QueueStep[] => {
  const steps: QueueStep[] = [];
  const maxSize = 10;

  // Initial state
  steps.push({
    array: [...initialQueue],
    front: 0,
    rear: initialQueue.length - 1,
    operation: 'idle',
    sorted: false,
    highlightedLine: 0,
  });

  // Perform random operations
  const operations = Math.floor(Math.random() * 5) + 5;
  const currentQueue = [...initialQueue];
  let front = 0;
  let rear = initialQueue.length - 1;

  for (let i = 0; i < operations; i++) {
    const currentSize = rear - front + 1;
    const canEnqueue = currentQueue.length < maxSize;
    const canDequeue = currentSize > 0;

    if (!canDequeue || (canEnqueue && Math.random() > 0.5)) {
      // Enqueue operation
      const value = Math.floor(Math.random() * 99) + 1;

      // Show enqueue() method call
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        sorted: false,
        highlightedLine: 5,
      });

      // Increment rear and add element
      rear++;
      currentQueue.push(value);
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'enqueue',
        operationValue: value,
        sorted: false,
        highlightedLine: 6,
      });

      // Return to idle
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        sorted: false,
        highlightedLine: 0,
      });
    } else {
      // Dequeue operation
      // Show dequeue() method call
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        sorted: false,
        highlightedLine: 9,
      });

      // Check if empty
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        sorted: false,
        highlightedLine: 10,
      });

      // Get item at front and remove it
      const dequeuedValue = currentQueue[front];
      front++;
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'dequeue',
        operationValue: dequeuedValue,
        sorted: false,
        highlightedLine: 13,
      });

      // Return to idle
      steps.push({
        array: [...currentQueue],
        front,
        rear,
        operation: 'idle',
        sorted: false,
        highlightedLine: 0,
      });
    }
  }

  return steps;
};

export const QueueVisualizer = () => {
  const [steps, setSteps] = useState<QueueStep[]>([]);

  const generateNewQueue = () => {
    const newQueue = generateRandomQueue();
    const newSteps = generateSteps(newQueue);
    setSteps(newSteps);
  };

  useEffect(() => {
    generateNewQueue();
  }, []);

  const controls = useVisualizerControls(steps, {
    onGenerateArray: generateNewQueue,
  });

  const maxSize = 10;

  const visualization = controls.currentStepData && (
    <div className="flex flex-col gap-6 items-center w-full">
      {/* Front and Rear labels */}
      <div className="flex gap-2 w-full max-w-4xl">
        {Array.from({ length: maxSize }, (_, index) => {
          const isFront = index === controls.currentStepData.front;
          const isRear = index === controls.currentStepData.rear;

          return (
            <div key={index} className="flex-1 text-center">
              <div className="h-6 flex flex-col justify-center">
                {isFront && (
                  <div className="text-xs font-semibold text-green-600">
                    ↓ FRONT
                  </div>
                )}
                {isRear && !isFront && (
                  <div className="text-xs font-semibold text-purple-600">
                    ↓ REAR
                  </div>
                )}
                {isFront && isRear && (
                  <div className="text-xs font-semibold text-blue-600">
                    ↓ F/R
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Queue slots */}
      <div className="flex gap-2 w-full max-w-4xl">
        {Array.from({ length: maxSize }, (_, index) => {
          const isActive =
            index >= controls.currentStepData.front &&
            index <= controls.currentStepData.rear;
          const value = isActive
            ? controls.currentStepData.array[index]
            : null;
          const isFront = index === controls.currentStepData.front;
          const isRear = index === controls.currentStepData.rear;
          const isFrontOp =
            isFront && controls.currentStepData.operation === 'dequeue';
          const isRearOp =
            isRear && controls.currentStepData.operation === 'enqueue';

          return (
            <div
              key={index}
              className={clsx(
                'flex-1 h-20 rounded-lg border-2',
                'flex flex-col items-center justify-center',
                'font-mono text-lg font-semibold',
                'transition-all duration-300',
                {
                  'bg-green-500 border-green-600 text-white scale-105':
                    isFrontOp,
                  'bg-purple-500 border-purple-600 text-white scale-105':
                    isRearOp && !isFrontOp,
                  'bg-green-400 border-green-500 text-white':
                    isFront && isActive && !isFrontOp,
                  'bg-purple-400 border-purple-500 text-white':
                    isRear && isActive && !isFrontOp && !isRearOp,
                  'bg-blue-500 border-blue-600 text-white':
                    isActive &&
                    !isFront &&
                    !isRear &&
                    !isFrontOp &&
                    !isRearOp,
                  'bg-gray-100 border-gray-300 text-gray-400': !isActive,
                }
              )}
            >
              <div>{value !== null ? value : '—'}</div>
              <div className="text-xs mt-1 opacity-70">[{index}]</div>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-gray-500">
        ← Dequeue from FRONT | Enqueue at REAR →
      </div>
    </div>
  );

  const extraInfo = controls.currentStepData && (
    <div className="text-sm space-y-2">
      <div>
        <strong>Front Index:</strong> {controls.currentStepData.front}
      </div>
      <div>
        <strong>Rear Index:</strong> {controls.currentStepData.rear}
      </div>
      <div>
        <strong>Size:</strong>{' '}
        {controls.currentStepData.rear -
          controls.currentStepData.front +
          1 >
        0
          ? controls.currentStepData.rear -
            controls.currentStepData.front +
            1
          : 0}
      </div>
      <div>
        <strong>Capacity:</strong> {maxSize}
      </div>
      <div>
        <strong>Operation:</strong>{' '}
        {controls.currentStepData.operation === 'enqueue' && (
          <span className="text-purple-600">
            ENQUEUE({controls.currentStepData.operationValue})
          </span>
        )}
        {controls.currentStepData.operation === 'dequeue' && (
          <span className="text-green-600">
            DEQUEUE() → {controls.currentStepData.operationValue}
          </span>
        )}
        {controls.currentStepData.operation === 'idle' && (
          <span className="text-gray-600">-</span>
        )}
      </div>
      {controls.currentStepData.front <=
        controls.currentStepData.rear && (
        <div>
          <strong>Front Element:</strong>{' '}
          {
            controls.currentStepData.array[
              controls.currentStepData.front
            ]
          }
        </div>
      )}
      <div>
        <strong>Empty:</strong>{' '}
        {controls.currentStepData.front >
        controls.currentStepData.rear
          ? 'Yes'
          : 'No'}
      </div>
    </div>
  );

  return (
    <DataStructureVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      visualization={visualization}
      extraInfo={extraInfo}
    />
  );
};
