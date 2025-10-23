import { useState, useEffect } from 'react';
import { AlgorithmVisualizer } from '@/components/AlgorithmVisualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  currentDigit: number;
  digitPosition: number;
  buckets: number[][];
  currentBucket: number;
  placing: boolean;
  sorted: boolean;
  highlightedLine: number;
  maxDigits: number;
}

const CODE_LINES = [
  'const radixSort = (arr: number[]) => {',
  '  const max = Math.max(...arr);',
  '  const maxDigits = Math.floor(Math.log10(max)) + 1;',
  '',
  '  for (let digit = 0; digit < maxDigits; digit++) {',
  '    const buckets: number[][] = Array(10).fill([]).map(() => []);',
  '',
  '    // Distribute into buckets by current digit',
  '    for (let i = 0; i < arr.length; i++) {',
  '      const digitValue = getDigit(arr[i], digit);',
  '      buckets[digitValue].push(arr[i]);',
  '    }',
  '',
  '    // Collect from buckets back to array',
  '    let index = 0;',
  '    for (let bucket = 0; bucket < 10; bucket++) {',
  '      for (let i = 0; i < buckets[bucket].length; i++) {',
  '        arr[index] = buckets[bucket][i];',
  '        index++;',
  '      }',
  '    }',
  '  }',
  '  return arr;',
  '};',
  '',
  'const getDigit = (num: number, place: number) => {',
  '  return Math.floor(num / Math.pow(10, place)) % 10;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-purple-400', label: 'Current Digit Position' },
  { color: 'bg-yellow-400', label: 'In Bucket' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];

export const RadixSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

  const generateRandomArray = (size: number = 10) => {
    const newArray = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 1000) + 1
    );
    generateSteps(newArray);
  };

  const getDigit = (num: number, place: number): number => {
    return Math.floor(num / Math.pow(10, place)) % 10;
  };

  const generateSteps = (arr: number[]) => {
    const newSteps: SortStep[] = [];
    const array = [...arr];
    const n = array.length;

    // Initial state
    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: 0,
      buckets: [],
      currentBucket: -1,
      placing: false,
      sorted: false,
      highlightedLine: 0,
      maxDigits: 0,
    });

    // Line 1: const max = Math.max(...arr);
    const max = Math.max(...array);
    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: 0,
      buckets: [],
      currentBucket: -1,
      placing: false,
      sorted: false,
      highlightedLine: 1,
      maxDigits: 0,
    });

    // Line 2: const maxDigits = Math.floor(Math.log10(max)) + 1;
    const maxDigits = Math.floor(Math.log10(max)) + 1;
    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: 0,
      buckets: [],
      currentBucket: -1,
      placing: false,
      sorted: false,
      highlightedLine: 2,
      maxDigits,
    });

    // Process each digit position
    for (let digit = 0; digit < maxDigits; digit++) {
      // Line 4: for (let digit = 0; digit < maxDigits; digit++)
      newSteps.push({
        array: [...array],
        currentDigit: -1,
        digitPosition: digit,
        buckets: [],
        currentBucket: -1,
        placing: false,
        sorted: false,
        highlightedLine: 4,
        maxDigits,
      });

      // Line 5: const buckets = Array(10)...
      const buckets: number[][] = Array(10)
        .fill([])
        .map(() => []);
      newSteps.push({
        array: [...array],
        currentDigit: -1,
        digitPosition: digit,
        buckets: buckets.map((b) => [...b]),
        currentBucket: -1,
        placing: false,
        sorted: false,
        highlightedLine: 5,
        maxDigits,
      });

      // Distribute into buckets
      for (let i = 0; i < n; i++) {
        // Line 8: for (let i = 0; i < arr.length; i++)
        newSteps.push({
          array: [...array],
          currentDigit: i,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: -1,
          placing: false,
          sorted: false,
          highlightedLine: 8,
          maxDigits,
        });

        // Line 9: const digitValue = getDigit(arr[i], digit);
        const digitValue = getDigit(array[i], digit);
        newSteps.push({
          array: [...array],
          currentDigit: i,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: digitValue,
          placing: false,
          sorted: false,
          highlightedLine: 9,
          maxDigits,
        });

        // Line 10: buckets[digitValue].push(arr[i]);
        buckets[digitValue].push(array[i]);
        newSteps.push({
          array: [...array],
          currentDigit: i,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: digitValue,
          placing: false,
          sorted: false,
          highlightedLine: 10,
          maxDigits,
        });
      }

      // Collect from buckets
      let index = 0;

      // Line 14: let index = 0;
      newSteps.push({
        array: [...array],
        currentDigit: -1,
        digitPosition: digit,
        buckets: buckets.map((b) => [...b]),
        currentBucket: -1,
        placing: true,
        sorted: false,
        highlightedLine: 14,
        maxDigits,
      });

      // Line 15: for (let bucket = 0; bucket < 10; bucket++)
      for (let bucket = 0; bucket < 10; bucket++) {
        newSteps.push({
          array: [...array],
          currentDigit: -1,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: bucket,
          placing: true,
          sorted: false,
          highlightedLine: 15,
          maxDigits,
        });

        // Line 16: for (let i = 0; i < buckets[bucket].length; i++)
        for (let i = 0; i < buckets[bucket].length; i++) {
          newSteps.push({
            array: [...array],
            currentDigit: index,
            digitPosition: digit,
            buckets: buckets.map((b) => [...b]),
            currentBucket: bucket,
            placing: true,
            sorted: false,
            highlightedLine: 16,
            maxDigits,
          });

          // Line 17: arr[index] = buckets[bucket][i];
          array[index] = buckets[bucket][i];
          newSteps.push({
            array: [...array],
            currentDigit: index,
            digitPosition: digit,
            buckets: buckets.map((b) => [...b]),
            currentBucket: bucket,
            placing: true,
            sorted: false,
            highlightedLine: 17,
            maxDigits,
          });

          // Line 18: index++;
          index++;
          newSteps.push({
            array: [...array],
            currentDigit: index - 1,
            digitPosition: digit,
            buckets: buckets.map((b) => [...b]),
            currentBucket: bucket,
            placing: true,
            sorted: false,
            highlightedLine: 18,
            maxDigits,
          });
        }
      }
    }

    // Final sorted state
    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: maxDigits,
      buckets: [],
      currentBucket: -1,
      placing: false,
      sorted: true,
      highlightedLine: 22,
      maxDigits,
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
    if (step.placing && index === step.currentDigit) {
      return 'bg-purple-400';
    }
    if (!step.placing && index === step.currentDigit) {
      return 'bg-blue-400';
    }
    return 'bg-gray-300';
  };

  const extraInfo = controls.currentStepData ? (
    <div className="mt-4 space-y-3">
      {controls.currentStepData.maxDigits > 0 && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Max Digits:</strong> {controls.currentStepData.maxDigits}
          </p>
          <p className="text-sm text-blue-800">
            <strong>Current Digit Position:</strong>{' '}
            {controls.currentStepData.digitPosition} (
            {controls.currentStepData.digitPosition === 0
              ? 'ones'
              : controls.currentStepData.digitPosition === 1
                ? 'tens'
                : controls.currentStepData.digitPosition === 2
                  ? 'hundreds'
                  : `10^${controls.currentStepData.digitPosition}`}
            )
          </p>
        </div>
      )}

      {!controls.currentStepData.placing &&
        controls.currentStepData.currentDigit >= 0 && (
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
            <p className="text-sm text-purple-800">
              Distributing element{' '}
              {controls.currentStepData.array[
                controls.currentStepData.currentDigit
              ]}{' '}
              into bucket{' '}
              {getDigit(
                controls.currentStepData.array[
                  controls.currentStepData.currentDigit
                ],
                controls.currentStepData.digitPosition
              )}
            </p>
          </div>
        )}

      {controls.currentStepData.placing &&
        controls.currentStepData.currentBucket >= 0 && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              Collecting from bucket {controls.currentStepData.currentBucket}
            </p>
          </div>
        )}

      {controls.currentStepData.buckets.length > 0 && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mb-2">
            Buckets (by digit {controls.currentStepData.digitPosition}):
          </p>
          <div className="space-y-1">
            {controls.currentStepData.buckets.map((bucket, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded font-mono ${
                    idx === controls.currentStepData.currentBucket
                      ? 'bg-yellow-200 font-bold'
                      : 'bg-gray-200'
                  }`}
                >
                  [{idx}]:
                </span>
                <div className="flex gap-1 flex-wrap">
                  {bucket.length === 0 ? (
                    <span className="text-xs text-gray-400 italic">empty</span>
                  ) : (
                    bucket.map((val, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-100 rounded"
                      >
                        {val}
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : null;

  return (
    <AlgorithmVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
      extraInfo={extraInfo}
    />
  );
};
