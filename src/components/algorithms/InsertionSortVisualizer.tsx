import { useState, useEffect } from 'react';

interface SortStep {
  array: number[];
  currentIndex: number;
  comparingIndex: number;
  sorted: boolean;
  highlightedLine: number;
}

export const InsertionSortVisualizer = () => {
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

    // Initial state - line 1: const n = arr.length
    newSteps.push({
      array: [...tempArray],
      currentIndex: -1,
      comparingIndex: -1,
      sorted: false,
      highlightedLine: 1,
    });

    // line 3: for (let i = 1; i < n; i++)
    for (let i = 1; i < tempArray.length; i++) {
      // line 4: const key = arr[i]
      newSteps.push({
        array: [...tempArray],
        currentIndex: i,
        comparingIndex: -1,
        sorted: false,
        highlightedLine: 4,
      });

      const key = tempArray[i];

      // line 5: let j = i - 1
      let j = i - 1;
      newSteps.push({
        array: [...tempArray],
        currentIndex: i,
        comparingIndex: j,
        sorted: false,
        highlightedLine: 5,
      });

      // line 9: while (j >= 0 && arr[j] > key)
      while (j >= 0 && tempArray[j] > key) {
        newSteps.push({
          array: [...tempArray],
          currentIndex: i,
          comparingIndex: j,
          sorted: false,
          highlightedLine: 9,
        });

        // line 10: arr[j + 1] = arr[j]
        tempArray[j + 1] = tempArray[j];
        newSteps.push({
          array: [...tempArray],
          currentIndex: i,
          comparingIndex: j,
          sorted: false,
          highlightedLine: 10,
        });

        // line 11: j = j - 1
        j = j - 1;
        newSteps.push({
          array: [...tempArray],
          currentIndex: j + 1,
          comparingIndex: j,
          sorted: false,
          highlightedLine: 11,
        });
      }

      // line 13: arr[j + 1] = key
      tempArray[j + 1] = key;
      newSteps.push({
        array: [...tempArray],
        currentIndex: j + 1,
        comparingIndex: -1,
        sorted: false,
        highlightedLine: 13,
      });
    }

    // Final sorted state - line 16: return arr
    newSteps.push({
      array: [...tempArray],
      currentIndex: -1,
      comparingIndex: -1,
      sorted: true,
      highlightedLine: 16,
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
    if (index === step.currentIndex) return 'bg-blue-500';
    if (index === step.comparingIndex) return 'bg-yellow-500';
    if (index < step.currentIndex && step.currentIndex !== -1) return 'bg-green-400';
    return 'bg-gray-400';
  };

  const codeLines = [
    'const insertionSort = (arr: number[]): number[] => {',
    '  const n = arr.length;',
    '',
    '  for (let i = 1; i < n; i++) {',
    '    const key = arr[i];',
    '    let j = i - 1;',
    '',
    '    // Move elements greater than key',
    '    // to one position ahead',
    '    while (j >= 0 && arr[j] > key) {',
    '      arr[j + 1] = arr[j];',
    '      j = j - 1;',
    '    }',
    '    arr[j + 1] = key;',
    '  }',
    '',
    '  return arr;',
    '};',
  ];

  const currentStepData = steps[currentStep] || steps[0];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-start">
        {/* Visualization Area */}
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Array Visualization
          </h3>
          <div className="flex-1 flex items-end justify-center gap-2 bg-gray-50 rounded p-4">
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

      {/* Legend */}
      <div className="flex gap-4 mb-6 text-sm flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded" />
          <span>Current Element</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded" />
          <span>Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-400 rounded" />
          <span>Sorted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400 rounded" />
          <span>Unsorted</span>
        </div>
      </div>

      {/* Step Info */}
      <div className="mb-6 text-sm text-gray-700">
        Step {currentStep} of {steps.length - 1}
        {currentStepData?.sorted && (
          <span className="ml-2 text-green-600 font-semibold">- Sorted!</span>
        )}
      </div>

      {/* Controls */}
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
          <label className="text-sm text-gray-700 font-medium">Speed:</label>
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
      </div>
    </div>
  );
};
