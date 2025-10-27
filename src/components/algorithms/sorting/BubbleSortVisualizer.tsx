import { useState, useEffect } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  comparingIndices: number[];
  swapped: boolean;
  passComplete: boolean;
  sorted: boolean;
  highlightedLine: number;
  sortedIndices: number[];
}

const CODE_LINES = [
  'const bubbleSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  for (let i = n - 1; i >= 1; i--) {',
  '    let swapped = false;',
  '',
  '    for (let j = 0; j < i; j++) {',
  '      if (arr[j] > arr[j + 1]) {',
  '        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];',
  '        swapped = true;',
  '      }',
  '    }',
  '',
  '    if (!swapped) {',
  '      break; // Array is sorted',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-yellow-400', label: 'Comparing' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];

export const BubbleSortVisualizer = () => {
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
      comparingIndices: [],
      swapped: false,
      passComplete: false,
      sorted: false,
      highlightedLine: 0,
      sortedIndices: [],
    });

    // Line 1: const n = arr.length;
    newSteps.push({
      array: [...array],
      comparingIndices: [],
      swapped: false,
      passComplete: false,
      sorted: false,
      highlightedLine: 1,
      sortedIndices: [],
    });

    // Bubble sort algorithm
    for (let i = n - 1; i >= 1; i--) {
      // Line 3: for (let i = n - 1; i >= 1; i--)
      newSteps.push({
        array: [...array],
        comparingIndices: [],
        swapped: false,
        passComplete: false,
        sorted: false,
        highlightedLine: 3,
        sortedIndices: [...sortedIndices],
      });

      let swapped = false;

      // Line 4: let swapped = false;
      newSteps.push({
        array: [...array],
        comparingIndices: [],
        swapped: false,
        passComplete: false,
        sorted: false,
        highlightedLine: 4,
        sortedIndices: [...sortedIndices],
      });

      for (let j = 0; j < i; j++) {
        // Line 6: for (let j = 0; j < i; j++)
        newSteps.push({
          array: [...array],
          comparingIndices: [j, j + 1],
          swapped: false,
          passComplete: false,
          sorted: false,
          highlightedLine: 6,
          sortedIndices: [...sortedIndices],
        });

        // Line 7: if (arr[j] > arr[j + 1])
        newSteps.push({
          array: [...array],
          comparingIndices: [j, j + 1],
          swapped: false,
          passComplete: false,
          sorted: false,
          highlightedLine: 7,
          sortedIndices: [...sortedIndices],
        });

        if (array[j] > array[j + 1]) {
          // Line 8: [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          newSteps.push({
            array: [...array],
            comparingIndices: [j, j + 1],
            swapped: true,
            passComplete: false,
            sorted: false,
            highlightedLine: 8,
            sortedIndices: [...sortedIndices],
          });

          [array[j], array[j + 1]] = [array[j + 1], array[j]];

          // Show array after swap
          newSteps.push({
            array: [...array],
            comparingIndices: [j, j + 1],
            swapped: true,
            passComplete: false,
            sorted: false,
            highlightedLine: 8,
            sortedIndices: [...sortedIndices],
          });

          // Line 9: swapped = true;
          swapped = true;
          newSteps.push({
            array: [...array],
            comparingIndices: [],
            swapped: false,
            passComplete: false,
            sorted: false,
            highlightedLine: 9,
            sortedIndices: [...sortedIndices],
          });
        }
      }

      // Mark the last element of this pass as sorted
      sortedIndices.unshift(i);

      // Line 13: if (!swapped)
      newSteps.push({
        array: [...array],
        comparingIndices: [],
        swapped: false,
        passComplete: true,
        sorted: false,
        highlightedLine: 13,
        sortedIndices: [...sortedIndices],
      });

      if (!swapped) {
        // Line 14: break;
        newSteps.push({
          array: [...array],
          comparingIndices: [],
          swapped: false,
          passComplete: true,
          sorted: false,
          highlightedLine: 14,
          sortedIndices: [...sortedIndices],
        });
        // Mark all remaining elements as sorted
        for (let k = i - 1; k >= 0; k--) {
          sortedIndices.push(k);
        }
        break;
      }
    }

    // Mark the first element as sorted
    if (!sortedIndices.includes(0)) {
      sortedIndices.push(0);
    }

    // Line 18: return arr;
    newSteps.push({
      array: [...array],
      comparingIndices: [],
      swapped: false,
      passComplete: false,
      sorted: true,
      highlightedLine: 18,
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
    if (step.comparingIndices.includes(index)) {
      if (step.swapped) {
        return 'bg-red-400';
      }
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
