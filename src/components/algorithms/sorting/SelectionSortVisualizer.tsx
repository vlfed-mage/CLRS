import { useState, useEffect } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  currentIndex: number;
  minIndex: number;
  comparingIndex: number;
  swapping: boolean;
  sorted: boolean;
  highlightedLine: number;
  sortedIndices: number[];
}

const CODE_LINES = [
  'const selectionSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  for (let i = 0; i < n - 1; i++) {',
  '    let minIndex = i;',
  '',
  '    for (let j = i + 1; j < n; j++) {',
  '      if (arr[j] < arr[minIndex]) {',
  '        minIndex = j;',
  '      }',
  '    }',
  '',
  '    if (minIndex !== i) {',
  '      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Position' },
  { color: 'bg-yellow-400', label: 'Comparing' },
  { color: 'bg-purple-400', label: 'Current Min' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];

export const SelectionSortVisualizer = () => {
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
      currentIndex: -1,
      minIndex: -1,
      comparingIndex: -1,
      swapping: false,
      sorted: false,
      highlightedLine: 0,
      sortedIndices: [],
    });

    // Line 1: const n = arr.length;
    newSteps.push({
      array: [...array],
      currentIndex: -1,
      minIndex: -1,
      comparingIndex: -1,
      swapping: false,
      sorted: false,
      highlightedLine: 1,
      sortedIndices: [],
    });

    // Selection sort algorithm
    for (let i = 0; i < n - 1; i++) {
      // Line 3: for (let i = 0; i < n - 1; i++)
      newSteps.push({
        array: [...array],
        currentIndex: i,
        minIndex: -1,
        comparingIndex: -1,
        swapping: false,
        sorted: false,
        highlightedLine: 3,
        sortedIndices: [...sortedIndices],
      });

      // Line 4: let minIndex = i;
      let minIndex = i;
      newSteps.push({
        array: [...array],
        currentIndex: i,
        minIndex: minIndex,
        comparingIndex: -1,
        swapping: false,
        sorted: false,
        highlightedLine: 4,
        sortedIndices: [...sortedIndices],
      });

      // Find minimum element in unsorted portion
      for (let j = i + 1; j < n; j++) {
        // Line 6: for (let j = i + 1; j < n; j++)
        newSteps.push({
          array: [...array],
          currentIndex: i,
          minIndex: minIndex,
          comparingIndex: j,
          swapping: false,
          sorted: false,
          highlightedLine: 6,
          sortedIndices: [...sortedIndices],
        });

        // Line 7: if (arr[j] < arr[minIndex])
        newSteps.push({
          array: [...array],
          currentIndex: i,
          minIndex: minIndex,
          comparingIndex: j,
          swapping: false,
          sorted: false,
          highlightedLine: 7,
          sortedIndices: [...sortedIndices],
        });

        if (array[j] < array[minIndex]) {
          // Line 8: minIndex = j;
          minIndex = j;
          newSteps.push({
            array: [...array],
            currentIndex: i,
            minIndex: minIndex,
            comparingIndex: j,
            swapping: false,
            sorted: false,
            highlightedLine: 8,
            sortedIndices: [...sortedIndices],
          });
        }
      }

      // Line 12: if (minIndex !== i)
      newSteps.push({
        array: [...array],
        currentIndex: i,
        minIndex: minIndex,
        comparingIndex: -1,
        swapping: false,
        sorted: false,
        highlightedLine: 12,
        sortedIndices: [...sortedIndices],
      });

      if (minIndex !== i) {
        // Line 13: [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        newSteps.push({
          array: [...array],
          currentIndex: i,
          minIndex: minIndex,
          comparingIndex: -1,
          swapping: true,
          sorted: false,
          highlightedLine: 13,
          sortedIndices: [...sortedIndices],
        });

        [array[i], array[minIndex]] = [array[minIndex], array[i]];

        // Show array after swap
        newSteps.push({
          array: [...array],
          currentIndex: i,
          minIndex: minIndex,
          comparingIndex: -1,
          swapping: true,
          sorted: false,
          highlightedLine: 13,
          sortedIndices: [...sortedIndices],
        });
      }

      // Mark this position as sorted
      sortedIndices.push(i);
    }

    // Mark the last element as sorted
    sortedIndices.push(n - 1);

    // Line 17: return arr;
    newSteps.push({
      array: [...array],
      currentIndex: -1,
      minIndex: -1,
      comparingIndex: -1,
      swapping: false,
      sorted: true,
      highlightedLine: 17,
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
    if (
      step.swapping &&
      (index === step.currentIndex || index === step.minIndex)
    ) {
      return 'bg-red-400';
    }
    if (index === step.currentIndex) {
      return 'bg-blue-400';
    }
    if (index === step.minIndex) {
      return 'bg-purple-400';
    }
    if (index === step.comparingIndex) {
      return 'bg-yellow-400';
    }
    return 'bg-gray-300';
  };

  return (
    <SortingVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
    />
  );
};
