import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  countArray: number[];
  outputArray: number[];
  currentIndex: number;
  countingPhase: boolean;
  buildingOutput: boolean;
  sorted: boolean;
  highlightedLine: number;
  currentValue: number;
  maxValue: number;
}

const CODE_LINES = [
  'const countingSort = (arr: number[]) => {',
  '  const max = Math.max(...arr);',
  '  const count = new Array(max + 1).fill(0);',
  '',
  '  // Count occurrences',
  '  for (let i = 0; i < arr.length; i++) {',
  '    count[arr[i]]++;',
  '  }',
  '',
  '  // Build output array',
  '  let outputIndex = 0;',
  '  for (let i = 0; i <= max; i++) {',
  '    while (count[i] > 0) {',
  '      arr[outputIndex] = i;',
  '      outputIndex++;',
  '      count[i]--;',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-purple-400', label: 'Counting/Placing' },
  { color: 'bg-green-400', label: 'Placed in Output' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];

export const CountingSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

  const generateRandomArray = (size: number = 10) => {
    const newArray = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 20) + 1
    );
    generateSteps(newArray);
  };

  const generateSteps = (arr: number[]) => {
    const newSteps: SortStep[] = [];
    const array = [...arr];
    const n = array.length;

    // Initial state
    newSteps.push({
      array: [...array],
      countArray: [],
      outputArray: new Array(n).fill(-1),
      currentIndex: -1,
      countingPhase: false,
      buildingOutput: false,
      sorted: false,
      highlightedLine: 0,
      currentValue: -1,
      maxValue: -1,
    });

    // Line 1: const max = Math.max(...arr);
    const max = Math.max(...array);
    newSteps.push({
      array: [...array],
      countArray: [],
      outputArray: new Array(n).fill(-1),
      currentIndex: -1,
      countingPhase: false,
      buildingOutput: false,
      sorted: false,
      highlightedLine: 1,
      currentValue: -1,
      maxValue: max,
    });

    // Line 2: const count = new Array(max + 1).fill(0);
    const count = new Array(max + 1).fill(0);
    newSteps.push({
      array: [...array],
      countArray: [...count],
      outputArray: new Array(n).fill(-1),
      currentIndex: -1,
      countingPhase: false,
      buildingOutput: false,
      sorted: false,
      highlightedLine: 2,
      currentValue: -1,
      maxValue: max,
    });

    // Count occurrences
    // Line 5: for (let i = 0; i < arr.length; i++)
    for (let i = 0; i < n; i++) {
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: new Array(n).fill(-1),
        currentIndex: i,
        countingPhase: true,
        buildingOutput: false,
        sorted: false,
        highlightedLine: 5,
        currentValue: array[i],
        maxValue: max,
      });

      // Line 6: count[arr[i]]++;
      count[array[i]]++;
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: new Array(n).fill(-1),
        currentIndex: i,
        countingPhase: true,
        buildingOutput: false,
        sorted: false,
        highlightedLine: 6,
        currentValue: array[i],
        maxValue: max,
      });
    }

    // Build output array
    const output = new Array(n).fill(-1);
    let outputIndex = 0;

    // Line 10: let outputIndex = 0;
    newSteps.push({
      array: [...array],
      countArray: [...count],
      outputArray: [...output],
      currentIndex: -1,
      countingPhase: false,
      buildingOutput: true,
      sorted: false,
      highlightedLine: 10,
      currentValue: -1,
      maxValue: max,
    });

    // Line 11: for (let i = 0; i <= max; i++)
    for (let i = 0; i <= max; i++) {
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: [...output],
        currentIndex: -1,
        countingPhase: false,
        buildingOutput: true,
        sorted: false,
        highlightedLine: 11,
        currentValue: i,
        maxValue: max,
      });

      // Line 12: while (count[i] > 0)
      while (count[i] > 0) {
        newSteps.push({
          array: [...array],
          countArray: [...count],
          outputArray: [...output],
          currentIndex: outputIndex,
          countingPhase: false,
          buildingOutput: true,
          sorted: false,
          highlightedLine: 12,
          currentValue: i,
          maxValue: max,
        });

        // Line 13: arr[outputIndex] = i;
        output[outputIndex] = i;
        newSteps.push({
          array: [...array],
          countArray: [...count],
          outputArray: [...output],
          currentIndex: outputIndex,
          countingPhase: false,
          buildingOutput: true,
          sorted: false,
          highlightedLine: 13,
          currentValue: i,
          maxValue: max,
        });

        // Line 14: outputIndex++;
        outputIndex++;
        newSteps.push({
          array: [...array],
          countArray: [...count],
          outputArray: [...output],
          currentIndex: outputIndex - 1,
          countingPhase: false,
          buildingOutput: true,
          sorted: false,
          highlightedLine: 14,
          currentValue: i,
          maxValue: max,
        });

        // Line 15: count[i]--;
        count[i]--;
        newSteps.push({
          array: [...array],
          countArray: [...count],
          outputArray: [...output],
          currentIndex: outputIndex - 1,
          countingPhase: false,
          buildingOutput: true,
          sorted: false,
          highlightedLine: 15,
          currentValue: i,
          maxValue: max,
        });
      }
    }

    // Final sorted state
    newSteps.push({
      array: [...output],
      countArray: [...count],
      outputArray: [...output],
      currentIndex: -1,
      countingPhase: false,
      buildingOutput: false,
      sorted: true,
      highlightedLine: 19,
      currentValue: -1,
      maxValue: max,
    });

    setSteps(newSteps);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  const controls = useVisualizerControls(steps, {
    onGenerateArray: () => generateRandomArray(),
  });

  const getBarColor = (index: number, step: SortStep) => {
    if (step.sorted) {
      return 'bg-green-400';
    }
    if (step.countingPhase && index === step.currentIndex) {
      return 'bg-blue-400';
    }
    if (step.buildingOutput && index === step.currentIndex) {
      return 'bg-purple-400';
    }
    return 'bg-gray-300';
  };

  const extraInfo = controls.currentStepData ? (
    <div className="mt-4 space-y-3">
      {controls.currentStepData.maxValue >= 0 && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Max Value:</strong> {controls.currentStepData.maxValue}
          </p>
          <p className="text-sm text-blue-800">
            <strong>Count Array Size:</strong>{' '}
            {controls.currentStepData.maxValue + 1}
          </p>
        </div>
      )}

      {controls.currentStepData.countingPhase && (
        <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
          <p className="text-sm text-purple-800">
            Counting occurrences of value{' '}
            {controls.currentStepData.currentValue}
          </p>
        </div>
      )}

      {controls.currentStepData.buildingOutput && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            Placing value {controls.currentStepData.currentValue} in output
            array
          </p>
        </div>
      )}

      {controls.currentStepData.countArray.length > 0 && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mb-2">
            Count Array:
          </p>
          <div className="flex flex-wrap gap-2">
            {controls.currentStepData.countArray.map((count, idx) => (
              <div
                key={idx}
                className={clsx('text-xs px-2 py-1 rounded', {
                  'bg-purple-200 font-bold':
                    idx === controls.currentStepData.currentValue,
                  'bg-gray-200':
                    idx !== controls.currentStepData.currentValue,
                })}
              >
                [{idx}]: {count}
              </div>
            ))}
          </div>
        </div>
      )}

      {controls.currentStepData.buildingOutput && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mb-2">
            Output Array:
          </p>
          <div className="flex flex-wrap gap-1">
            {controls.currentStepData.outputArray.map((val, idx) => (
              <div
                key={idx}
                className={clsx('text-xs px-2 py-1 rounded', {
                  'bg-gray-200 text-gray-400': val === -1,
                  'bg-purple-300 font-bold':
                    val !== -1 &&
                    idx === controls.currentStepData.currentIndex,
                  'bg-green-200':
                    val !== -1 &&
                    idx !== controls.currentStepData.currentIndex,
                })}
              >
                {val === -1 ? '_' : val}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : null;

  return (
    <SortingVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
      extraInfo={extraInfo}
    />
  );
};
