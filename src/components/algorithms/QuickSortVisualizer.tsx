import { useState, useEffect } from 'react';
import { AlgorithmVisualizer } from '@/components/AlgorithmVisualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  low: number;
  high: number;
  pivotIndex: number;
  i: number;
  j: number;
  comparing: boolean;
  swapping: boolean;
  partitioning: boolean;
  sorted: boolean;
  highlightedLine: number;
  sortedIndices: number[];
  activeRange: [number, number] | null;
}

const CODE_LINES = [
  'const quickSort = (arr: number[], low: number, high: number) => {',
  '  if (low < high) {',
  '    const pivotIndex = partition(arr, low, high);',
  '    quickSort(arr, low, pivotIndex - 1);',
  '    quickSort(arr, pivotIndex + 1, high);',
  '  }',
  '};',
  '',
  'const partition = (arr: number[], low: number, high: number) => {',
  '  const pivot = arr[high];',
  '  let i = low - 1;',
  '',
  '  for (let j = low; j < high; j++) {',
  '    if (arr[j] < pivot) {',
  '      i++;',
  '      [arr[i], arr[j]] = [arr[j], arr[i]];',
  '    }',
  '  }',
  '',
  '  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];',
  '  return i + 1;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-purple-400', label: 'Pivot' },
  { color: 'bg-blue-400', label: 'Partition Index (i)' },
  { color: 'bg-yellow-400', label: 'Comparing (j)' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
  { color: 'bg-gray-100', label: 'Outside Range' },
];

export const QuickSortVisualizer = () => {
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
      low: 0,
      high: n - 1,
      pivotIndex: -1,
      i: -1,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: false,
      sorted: false,
      highlightedLine: 0,
      sortedIndices: [],
      activeRange: null,
    });

    const partition = (low: number, high: number): number => {
      // Line 9: const pivot = arr[high];
      const pivot = array[high];
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: high,
        i: -1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: true,
        sorted: false,
        highlightedLine: 9,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      // Line 10: let i = low - 1;
      let i = low - 1;
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: high,
        i,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: true,
        sorted: false,
        highlightedLine: 10,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      // Line 12: for (let j = low; j < high; j++)
      for (let j = low; j < high; j++) {
        newSteps.push({
          array: [...array],
          low,
          high,
          pivotIndex: high,
          i,
          j,
          comparing: false,
          swapping: false,
          partitioning: true,
          sorted: false,
          highlightedLine: 12,
          sortedIndices: [...sortedIndices],
          activeRange: [low, high],
        });

        // Line 13: if (arr[j] < pivot)
        newSteps.push({
          array: [...array],
          low,
          high,
          pivotIndex: high,
          i,
          j,
          comparing: true,
          swapping: false,
          partitioning: true,
          sorted: false,
          highlightedLine: 13,
          sortedIndices: [...sortedIndices],
          activeRange: [low, high],
        });

        if (array[j] < pivot) {
          // Line 14: i++;
          i++;
          newSteps.push({
            array: [...array],
            low,
            high,
            pivotIndex: high,
            i,
            j,
            comparing: false,
            swapping: false,
            partitioning: true,
            sorted: false,
            highlightedLine: 14,
            sortedIndices: [...sortedIndices],
            activeRange: [low, high],
          });

          // Line 15: [arr[i], arr[j]] = [arr[j], arr[i]];
          newSteps.push({
            array: [...array],
            low,
            high,
            pivotIndex: high,
            i,
            j,
            comparing: false,
            swapping: true,
            partitioning: true,
            sorted: false,
            highlightedLine: 15,
            sortedIndices: [...sortedIndices],
            activeRange: [low, high],
          });

          [array[i], array[j]] = [array[j], array[i]];

          // Show array after swap
          newSteps.push({
            array: [...array],
            low,
            high,
            pivotIndex: high,
            i,
            j,
            comparing: false,
            swapping: true,
            partitioning: true,
            sorted: false,
            highlightedLine: 15,
            sortedIndices: [...sortedIndices],
            activeRange: [low, high],
          });
        }
      }

      // Line 19: [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: high,
        i: i + 1,
        j: high,
        comparing: false,
        swapping: true,
        partitioning: true,
        sorted: false,
        highlightedLine: 19,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      [array[i + 1], array[high]] = [array[high], array[i + 1]];

      // Show array after pivot placement
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: i + 1,
        i: i + 1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: true,
        sorted: false,
        highlightedLine: 19,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      // Mark pivot as sorted
      sortedIndices.push(i + 1);

      // Line 20: return i + 1;
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: i + 1,
        i: i + 1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: false,
        sorted: false,
        highlightedLine: 20,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      return i + 1;
    };

    const quickSort = (low: number, high: number) => {
      // Line 1: if (low < high)
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: -1,
        i: -1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: false,
        sorted: false,
        highlightedLine: 1,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      if (low < high) {
        // Line 2: const pivotIndex = partition(arr, low, high);
        newSteps.push({
          array: [...array],
          low,
          high,
          pivotIndex: -1,
          i: -1,
          j: -1,
          comparing: false,
          swapping: false,
          partitioning: false,
          sorted: false,
          highlightedLine: 2,
          sortedIndices: [...sortedIndices],
          activeRange: [low, high],
        });

        const pivotIndex = partition(low, high);

        // Line 3: quickSort(arr, low, pivotIndex - 1);
        newSteps.push({
          array: [...array],
          low,
          high: pivotIndex - 1,
          pivotIndex,
          i: -1,
          j: -1,
          comparing: false,
          swapping: false,
          partitioning: false,
          sorted: false,
          highlightedLine: 3,
          sortedIndices: [...sortedIndices],
          activeRange: [low, pivotIndex - 1],
        });

        quickSort(low, pivotIndex - 1);

        // Line 4: quickSort(arr, pivotIndex + 1, high);
        newSteps.push({
          array: [...array],
          low: pivotIndex + 1,
          high,
          pivotIndex,
          i: -1,
          j: -1,
          comparing: false,
          swapping: false,
          partitioning: false,
          sorted: false,
          highlightedLine: 4,
          sortedIndices: [...sortedIndices],
          activeRange: [pivotIndex + 1, high],
        });

        quickSort(pivotIndex + 1, high);
      } else if (low === high) {
        // Single element is sorted
        sortedIndices.push(low);
      }
    };

    quickSort(0, n - 1);

    // Final sorted state
    newSteps.push({
      array: [...array],
      low: 0,
      high: n - 1,
      pivotIndex: -1,
      i: -1,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: false,
      sorted: true,
      highlightedLine: 0,
      sortedIndices: Array.from({ length: n }, (_, i) => i),
      activeRange: null,
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
    if (
      step.activeRange &&
      (index < step.activeRange[0] || index > step.activeRange[1])
    ) {
      return 'bg-gray-100';
    }
    if (step.swapping && (index === step.i || index === step.j)) {
      return 'bg-red-400';
    }
    if (index === step.pivotIndex) {
      return 'bg-purple-400';
    }
    if (index === step.i && step.i >= 0) {
      return 'bg-blue-400';
    }
    if (index === step.j && step.comparing) {
      return 'bg-yellow-400';
    }
    return 'bg-gray-300';
  };

  const extraInfo = controls.currentStepData?.activeRange ? (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Active Range:</strong> [
        {controls.currentStepData.activeRange[0]},{' '}
        {controls.currentStepData.activeRange[1]}]
      </p>
      {controls.currentStepData.pivotIndex >= 0 && (
        <p className="text-xs text-blue-600 mt-1">
          Pivot value: {controls.currentStepData.array[
            controls.currentStepData.pivotIndex
          ]}
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
