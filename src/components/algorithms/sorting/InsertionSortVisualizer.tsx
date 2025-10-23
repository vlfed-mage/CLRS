import { useState, useEffect } from 'react';
import type { LegendItem } from '@/components/AlgorithmVisualizer';
import { AlgorithmVisualizer } from '@/components/AlgorithmVisualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  currentIndex: number;
  comparingIndex: number;
  sorted: boolean;
  highlightedLine: number;
}

const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Current Element' },
  { color: 'bg-yellow-500', label: 'Comparing' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-400', label: 'Unsorted' },
];

const CODE_LINES = [
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

export const InsertionSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

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

  const generateRandomArray = (size: number = 10) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    generateSteps(newArray);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  const controls = useVisualizerControls(steps, {
    onGenerateArray: () => generateRandomArray(),
  });

  const getBarColor = (index: number, step: SortStep) => {
    if (step.sorted) return 'bg-green-500';
    if (index === step.currentIndex) return 'bg-blue-500';
    if (index === step.comparingIndex) return 'bg-yellow-500';
    if (index < step.currentIndex && step.currentIndex !== -1)
      return 'bg-green-400';
    return 'bg-gray-400';
  };

  return (
    <AlgorithmVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
    />
  );
};
