import { useState, useEffect } from 'react';

interface SortStep {
  array: number[];
  leftIndex: number;
  rightIndex: number;
  midIndex: number;
  mergingIndices: number[];
  sorted: boolean;
  highlightedLine: number;
}

export const MergeSortVisualizer = () => {
  const [, setArray] = useState<number[]>([]);
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);

  const generateRandomArray = (size: number = 8) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setCurrentStep(0);
    setIsPlaying(false);
    generateSteps(newArray);
  };

  const generateSteps = (arr: number[]) => {
    const newSteps: SortStep[] = [];
    const tempArray = [...arr];

    const merge = (
      arr: number[],
      left: number,
      mid: number,
      right: number
    ) => {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);

      let i = 0;
      let j = 0;
      let k = left;

      // Show merging process
      while (i < leftArr.length && j < rightArr.length) {
        newSteps.push({
          array: [...arr],
          leftIndex: left,
          rightIndex: right,
          midIndex: mid,
          mergingIndices: [left + i, mid + 1 + j],
          sorted: false,
          highlightedLine: 11,
        });

        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
          newSteps.push({
            array: [...arr],
            leftIndex: left,
            rightIndex: right,
            midIndex: mid,
            mergingIndices: [k],
            sorted: false,
            highlightedLine: 13,
          });
        } else {
          arr[k] = rightArr[j];
          j++;
          newSteps.push({
            array: [...arr],
            leftIndex: left,
            rightIndex: right,
            midIndex: mid,
            mergingIndices: [k],
            sorted: false,
            highlightedLine: 16,
          });
        }
        k++;
      }

      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        newSteps.push({
          array: [...arr],
          leftIndex: left,
          rightIndex: right,
          midIndex: mid,
          mergingIndices: [k],
          sorted: false,
          highlightedLine: 22,
        });
        i++;
        k++;
      }

      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        newSteps.push({
          array: [...arr],
          leftIndex: left,
          rightIndex: right,
          midIndex: mid,
          mergingIndices: [k],
          sorted: false,
          highlightedLine: 28,
        });
        j++;
        k++;
      }
    };

    const mergeSort = (arr: number[], left: number, right: number) => {
      if (left < right) {
        newSteps.push({
          array: [...arr],
          leftIndex: left,
          rightIndex: right,
          midIndex: -1,
          mergingIndices: [],
          sorted: false,
          highlightedLine: 3,
        });

        const mid = Math.floor((left + right) / 2);

        newSteps.push({
          array: [...arr],
          leftIndex: left,
          rightIndex: right,
          midIndex: mid,
          mergingIndices: [],
          sorted: false,
          highlightedLine: 4,
        });

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
      }
    };

    // Initial state
    newSteps.push({
      array: [...tempArray],
      leftIndex: -1,
      rightIndex: -1,
      midIndex: -1,
      mergingIndices: [],
      sorted: false,
      highlightedLine: 1,
    });

    mergeSort(tempArray, 0, tempArray.length - 1);

    // Final sorted state
    newSteps.push({
      array: [...tempArray],
      leftIndex: -1,
      rightIndex: -1,
      midIndex: -1,
      mergingIndices: [],
      sorted: true,
      highlightedLine: 33,
    });

    setSteps(newSteps);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, steps.length, speed]);

  const handlePlay = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const getBarColor = (index: number, step: SortStep) => {
    if (step.sorted) return 'bg-green-500';
    if (step.mergingIndices.includes(index)) return 'bg-blue-500';
    if (
      index >= step.leftIndex &&
      index <= step.rightIndex &&
      step.leftIndex !== -1
    )
      return 'bg-yellow-400';
    return 'bg-gray-400';
  };

  const codeLines = [
    'const mergeSort = (arr: number[]): number[] => {',
    '  const n = arr.length;',
    '  if (n <= 1) return arr;',
    '',
    '  const mid = Math.floor(n / 2);',
    '  const left = arr.slice(0, mid);',
    '  const right = arr.slice(mid);',
    '',
    '  return merge(',
    '    mergeSort(left),',
    '    mergeSort(right)',
    '  );',
    '};',
    '',
    'const merge = (left: number[], right: number[]): number[] => {',
    '  const result: number[] = [];',
    '  let i = 0, j = 0;',
    '',
    '  while (i < left.length && j < right.length) {',
    '    if (left[i] <= right[j]) {',
    '      result.push(left[i]);',
    '      i++;',
    '    } else {',
    '      result.push(right[j]);',
    '      j++;',
    '    }',
    '  }',
    '',
    '  while (i < left.length) {',
    '    result.push(left[i]);',
    '    i++;',
    '  }',
    '',
    '  while (j < right.length) {',
    '    result.push(right[j]);',
    '    j++;',
    '  }',
    '',
    '  return result;',
    '};',
  ];

  const currentStepData = steps[currentStep] || steps[0];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-start">
        {/* Visualization Area with Controls */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Array Visualization
            </h3>
            <div className="flex items-end justify-center gap-2 bg-gray-50 rounded p-4 min-h-[400px]">
              {currentStepData?.array.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div
                    className={`w-full ${getBarColor(
                      index,
                      currentStepData
                    )} transition-all duration-300 rounded-t`}
                    style={{
                      height: `${(value / 100) * 320}px`,
                    }}
                  />
                  <span className="text-xs font-mono text-gray-700">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls under visualization */}
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {!isPlaying ? (
                <button
                  onClick={handlePlay}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Play
                </button>
              ) : (
                <button
                  onClick={handlePause}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Pause
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={currentStep >= steps.length - 1}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Reset
              </button>
              <button
                onClick={() => generateRandomArray()}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                New Array
              </button>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-700 font-medium">
                Speed:
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-gray-600 w-20">{speed}ms</span>
            </div>

            {/* Legend */}
            <div className="flex gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded" />
                <span>Currently Merging</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded" />
                <span>Active Subarray</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded" />
                <span>Sorted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded" />
                <span>Unsorted</span>
              </div>
            </div>

            {/* Step Info */}
            <div className="text-sm text-gray-700">
              Step {currentStep} of {steps.length - 1}
              {currentStepData?.sorted && (
                <span className="ml-2 text-green-600 font-semibold">
                  - Sorted!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Code Display */}
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Algorithm Code
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 flex-1">
            <pre className="text-sm">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`transition-colors duration-200 px-2 leading-6 ${
                    currentStepData?.highlightedLine === index
                      ? 'bg-yellow-500 bg-opacity-30'
                      : ''
                  }`}
                >
                  <code className="text-gray-100">
                    {line || '\u00A0'}
                  </code>
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
