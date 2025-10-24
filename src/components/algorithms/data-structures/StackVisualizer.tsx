import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { DataStructureVisualizer } from '@/components/Visualizer';
import type { LegendItem } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface StackStep {
  array: number[];
  top: number;
  operation: 'push' | 'pop' | 'idle';
  operationValue?: number;
  sorted: boolean;
  highlightedLine: number;
}

const CODE_LINES = [
  'class Stack {',
  '  constructor() {',
  '    this.items = [];',
  '  }',
  '',
  '  push(element) {',
  '    this.items.push(element);',
  '  }',
  '',
  '  pop() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items.pop();',
  '  }',
  '',
  '  peek() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items[this.items.length - 1];',
  '  }',
  '',
  '  isEmpty() {',
  '    return this.items.length === 0;',
  '  }',
  '}',
];

const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Stack Elements' },
  { color: 'bg-green-500', label: 'Top (Current Operation)' },
  { color: 'bg-gray-300', label: 'Empty Slots' },
];

const generateRandomStack = (size = 8): number[] => {
  const stackSize = Math.floor(Math.random() * size) + 3;
  return Array.from(
    { length: stackSize },
    () => Math.floor(Math.random() * 99) + 1
  );
};

const generateSteps = (initialStack: number[]): StackStep[] => {
  const steps: StackStep[] = [];
  const maxSize = 10;

  // Initial state
  steps.push({
    array: [...initialStack],
    top: initialStack.length - 1,
    operation: 'idle',
    sorted: false,
    highlightedLine: 0,
  });

  // Perform random operations
  const operations = Math.floor(Math.random() * 5) + 5;
  const currentStack = [...initialStack];

  for (let i = 0; i < operations; i++) {
    const canPush = currentStack.length < maxSize;
    const canPop = currentStack.length > 0;

    if (!canPop || (canPush && Math.random() > 0.5)) {
      // Push operation
      const value = Math.floor(Math.random() * 99) + 1;

      // Show push() method call
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        sorted: false,
        highlightedLine: 5,
      });

      // Add element
      currentStack.push(value);
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'push',
        operationValue: value,
        sorted: false,
        highlightedLine: 6,
      });

      // Return to idle
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        sorted: false,
        highlightedLine: 0,
      });
    } else {
      // Pop operation
      // Show pop() method call
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        sorted: false,
        highlightedLine: 9,
      });

      // Check if empty
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        sorted: false,
        highlightedLine: 10,
      });

      // Pop and return element
      const poppedValue = currentStack[currentStack.length - 1];
      currentStack.pop();
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'pop',
        operationValue: poppedValue,
        sorted: false,
        highlightedLine: 13,
      });

      // Return to idle
      steps.push({
        array: [...currentStack],
        top: currentStack.length - 1,
        operation: 'idle',
        sorted: false,
        highlightedLine: 0,
      });
    }
  }

  return steps;
};

export const StackVisualizer = () => {
  const [steps, setSteps] = useState<StackStep[]>([]);

  const generateNewStack = () => {
    const newStack = generateRandomStack();
    const newSteps = generateSteps(newStack);
    setSteps(newSteps);
  };

  useEffect(() => {
    generateNewStack();
  }, []);

  const controls = useVisualizerControls(steps, {
    onGenerateArray: generateNewStack,
  });

  const maxSize = 10;

  const visualization = controls.currentStepData && (
    <div className="flex flex-col-reverse gap-2 items-center w-full">
      {/* Stack elements (rendered bottom to top) */}
      {Array.from({ length: maxSize }, (_, index) => {
        const isOccupied = index < controls.currentStepData.array.length;
        const value = isOccupied
          ? controls.currentStepData.array[index]
          : null;
        const isTop = index === controls.currentStepData.top;
        const isOperation =
          isTop && controls.currentStepData.operation !== 'idle';

        return (
          <div
            key={index}
            className="w-full max-w-xs flex items-center gap-4"
          >
            {/* Index label */}
            <span className="text-xs text-gray-500 w-6 text-right">
              {index}
            </span>

            {/* Stack slot */}
            <div
              className={clsx(
                'flex-1 h-12 rounded-lg border-2',
                'flex items-center justify-center',
                'font-mono text-lg font-semibold',
                'transition-all duration-300',
                {
                  'bg-green-500 border-green-600 text-white scale-105':
                    isOperation,
                  'bg-blue-500 border-blue-600 text-white':
                    isOccupied && !isOperation,
                  'bg-gray-100 border-gray-300 text-gray-400': !isOccupied,
                }
              )}
            >
              {value !== null ? value : '—'}
            </div>

            {/* Top indicator */}
            <div className="w-16 text-xs font-semibold">
              {isTop && (
                <span className="text-green-600">← TOP</span>
              )}
            </div>
          </div>
        );
      })}
      <div className="text-xs text-gray-500 mt-2">
        ↑ Stack grows upward
      </div>
    </div>
  );

  const extraInfo = controls.currentStepData && (
    <div className="text-sm space-y-2">
      <div>
        <strong>Top Index:</strong> {controls.currentStepData.top}
      </div>
      <div>
        <strong>Size:</strong> {controls.currentStepData.array.length}
      </div>
      <div>
        <strong>Capacity:</strong> {maxSize}
      </div>
      <div>
        <strong>Operation:</strong>{' '}
        {controls.currentStepData.operation === 'push' && (
          <span className="text-green-600">
            PUSH({controls.currentStepData.operationValue})
          </span>
        )}
        {controls.currentStepData.operation === 'pop' && (
          <span className="text-red-600">
            POP() → {controls.currentStepData.operationValue}
          </span>
        )}
        {controls.currentStepData.operation === 'idle' && (
          <span className="text-gray-600">-</span>
        )}
      </div>
      {controls.currentStepData.top >= 0 && (
        <div>
          <strong>Top Element:</strong>{' '}
          {
            controls.currentStepData.array[
              controls.currentStepData.top
            ]
          }
        </div>
      )}
      <div>
        <strong>Empty:</strong>{' '}
        {controls.currentStepData.top === -1 ? 'Yes' : 'No'}
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
