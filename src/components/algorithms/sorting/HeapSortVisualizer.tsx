import { useState, useEffect } from 'react';
import { AlgorithmVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  heapSize: number;
  currentIndex: number;
  largest: number;
  left: number;
  right: number;
  swapping: boolean;
  building: boolean;
  sorting: boolean;
  sorted: boolean;
  highlightedLine: number;
  sortedIndices: number[];
}

const CODE_LINES = [
  'const heapSort = (arr: number[]) => {',
  '  const n = arr.length;',
  '',
  '  // Build max heap',
  '  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {',
  '    heapify(arr, n, i);',
  '  }',
  '',
  '  // Extract elements from heap one by one',
  '  for (let i = n - 1; i > 0; i--) {',
  '    [arr[0], arr[i]] = [arr[i], arr[0]];',
  '    heapify(arr, i, 0);',
  '  }',
  '};',
  '',
  'const heapify = (arr: number[], n: number, i: number) => {',
  '  let largest = i;',
  '  const left = 2 * i + 1;',
  '  const right = 2 * i + 2;',
  '',
  '  if (left < n && arr[left] > arr[largest]) {',
  '    largest = left;',
  '  }',
  '',
  '  if (right < n && arr[right] > arr[largest]) {',
  '    largest = right;',
  '  }',
  '',
  '  if (largest !== i) {',
  '    [arr[i], arr[largest]] = [arr[largest], arr[i]];',
  '    heapify(arr, n, largest);',
  '  }',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-purple-400', label: 'Root/Current Node' },
  { color: 'bg-blue-400', label: 'Left Child' },
  { color: 'bg-cyan-400', label: 'Right Child' },
  { color: 'bg-yellow-400', label: 'Largest' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Heap' },
  { color: 'bg-gray-100', label: 'Outside Heap' },
];

export const HeapSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

  const generateRandomArray = (size: number = 10) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    generateSteps(newArray);
  };

  const generateSteps = (arr: number[]) => {
    const newSteps: SortStep[] = [];
    const array = [...arr];
    const n = array.length;
    const sortedIndices: number[] = [];

    // Initial state
    newSteps.push({
      array: [...array],
      heapSize: n,
      currentIndex: -1,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: false,
      sorting: false,
      sorted: false,
      highlightedLine: 0,
      sortedIndices: [],
    });

    // Line 1: const n = arr.length;
    newSteps.push({
      array: [...array],
      heapSize: n,
      currentIndex: -1,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: false,
      sorting: false,
      sorted: false,
      highlightedLine: 1,
      sortedIndices: [],
    });

    const heapify = (heapSize: number, i: number) => {
      // Line 16: let largest = i;
      let largest = i;
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest: i,
        left: -1,
        right: -1,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 16,
        sortedIndices: [...sortedIndices],
      });

      // Line 17: const left = 2 * i + 1;
      const left = 2 * i + 1;
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right: -1,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 17,
        sortedIndices: [...sortedIndices],
      });

      // Line 18: const right = 2 * i + 2;
      const right = 2 * i + 2;
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 18,
        sortedIndices: [...sortedIndices],
      });

      // Line 20: if (left < n && arr[left] > arr[largest])
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 20,
        sortedIndices: [...sortedIndices],
      });

      if (left < heapSize && array[left] > array[largest]) {
        // Line 21: largest = left;
        largest = left;
        newSteps.push({
          array: [...array],
          heapSize,
          currentIndex: i,
          largest,
          left,
          right,
          swapping: false,
          building: true,
          sorting: false,
          sorted: false,
          highlightedLine: 21,
          sortedIndices: [...sortedIndices],
        });
      }

      // Line 24: if (right < n && arr[right] > arr[largest])
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 24,
        sortedIndices: [...sortedIndices],
      });

      if (right < heapSize && array[right] > array[largest]) {
        // Line 25: largest = right;
        largest = right;
        newSteps.push({
          array: [...array],
          heapSize,
          currentIndex: i,
          largest,
          left,
          right,
          swapping: false,
          building: true,
          sorting: false,
          sorted: false,
          highlightedLine: 25,
          sortedIndices: [...sortedIndices],
        });
      }

      // Line 28: if (largest !== i)
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 28,
        sortedIndices: [...sortedIndices],
      });

      if (largest !== i) {
        // Line 29: [arr[i], arr[largest]] = [arr[largest], arr[i]];
        newSteps.push({
          array: [...array],
          heapSize,
          currentIndex: i,
          largest,
          left,
          right,
          swapping: true,
          building: true,
          sorting: false,
          sorted: false,
          highlightedLine: 29,
          sortedIndices: [...sortedIndices],
        });

        [array[i], array[largest]] = [array[largest], array[i]];

        // Show array after swap
        newSteps.push({
          array: [...array],
          heapSize,
          currentIndex: i,
          largest,
          left,
          right,
          swapping: true,
          building: true,
          sorting: false,
          sorted: false,
          highlightedLine: 29,
          sortedIndices: [...sortedIndices],
        });

        // Line 30: heapify(arr, n, largest);
        newSteps.push({
          array: [...array],
          heapSize,
          currentIndex: largest,
          largest: -1,
          left: -1,
          right: -1,
          swapping: false,
          building: true,
          sorting: false,
          sorted: false,
          highlightedLine: 30,
          sortedIndices: [...sortedIndices],
        });

        heapify(heapSize, largest);
      }
    };

    // Build max heap
    // Line 4: for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      newSteps.push({
        array: [...array],
        heapSize: n,
        currentIndex: i,
        largest: -1,
        left: -1,
        right: -1,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 4,
        sortedIndices: [],
      });

      // Line 5: heapify(arr, n, i);
      newSteps.push({
        array: [...array],
        heapSize: n,
        currentIndex: i,
        largest: -1,
        left: -1,
        right: -1,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 5,
        sortedIndices: [],
      });

      heapify(n, i);
    }

    // Extract elements from heap one by one
    // Line 9: for (let i = n - 1; i > 0; i--)
    for (let i = n - 1; i > 0; i--) {
      newSteps.push({
        array: [...array],
        heapSize: i + 1,
        currentIndex: 0,
        largest: -1,
        left: -1,
        right: -1,
        swapping: false,
        building: false,
        sorting: true,
        sorted: false,
        highlightedLine: 9,
        sortedIndices: [...sortedIndices],
      });

      // Line 10: [arr[0], arr[i]] = [arr[i], arr[0]];
      newSteps.push({
        array: [...array],
        heapSize: i + 1,
        currentIndex: 0,
        largest: i,
        left: -1,
        right: -1,
        swapping: true,
        building: false,
        sorting: true,
        sorted: false,
        highlightedLine: 10,
        sortedIndices: [...sortedIndices],
      });

      [array[0], array[i]] = [array[i], array[0]];

      // Show array after swap
      newSteps.push({
        array: [...array],
        heapSize: i + 1,
        currentIndex: 0,
        largest: i,
        left: -1,
        right: -1,
        swapping: true,
        building: false,
        sorting: true,
        sorted: false,
        highlightedLine: 10,
        sortedIndices: [...sortedIndices],
      });

      // Mark as sorted
      sortedIndices.unshift(i);

      // Line 11: heapify(arr, i, 0);
      newSteps.push({
        array: [...array],
        heapSize: i,
        currentIndex: 0,
        largest: -1,
        left: -1,
        right: -1,
        swapping: false,
        building: false,
        sorting: true,
        sorted: false,
        highlightedLine: 11,
        sortedIndices: [...sortedIndices],
      });

      heapify(i, 0);
    }

    // Mark first element as sorted
    sortedIndices.unshift(0);

    // Final sorted state
    newSteps.push({
      array: [...array],
      heapSize: 0,
      currentIndex: -1,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: false,
      sorting: false,
      sorted: true,
      highlightedLine: 0,
      sortedIndices: [...sortedIndices],
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
    if (step.sortedIndices.includes(index)) {
      return 'bg-green-400';
    }
    if (index >= step.heapSize) {
      return 'bg-gray-100';
    }
    if (
      step.swapping &&
      (index === step.currentIndex || index === step.largest)
    ) {
      return 'bg-red-400';
    }
    if (index === step.currentIndex) {
      return 'bg-purple-400';
    }
    if (index === step.largest && step.largest !== step.currentIndex) {
      return 'bg-yellow-400';
    }
    if (index === step.left) {
      return 'bg-blue-400';
    }
    if (index === step.right) {
      return 'bg-cyan-400';
    }
    return 'bg-gray-300';
  };

  const extraInfo = controls.currentStepData ? (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Heap Size:</strong> {controls.currentStepData.heapSize}
      </p>
      {controls.currentStepData.building && (
        <p className="text-xs text-blue-600 mt-1">
          Building max heap from bottom up
        </p>
      )}
      {controls.currentStepData.sorting && (
        <p className="text-xs text-blue-600 mt-1">
          Extracting max element and re-heapifying
        </p>
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
