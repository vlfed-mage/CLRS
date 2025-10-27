import { useState, useEffect } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  gap: number;
  currentIndex: number;
  comparingIndex: number;
  moving: boolean;
  sorted: boolean;
  highlightedLine: number;
  gapPairs: number[][];
}

const CODE_LINES = [
  'const shellSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  // Generate Knuth sequence: 1, 4, 13, 40, 121, ...',
  '  const gaps: number[] = [];',
  '  let gap = 1;',
  '  while (gap < n) {',
  '    gaps.push(gap);',
  '    gap = gap * 3 + 1; // (3^k - 1) / 2',
  '  }',
  '',
  '  // Sort with decreasing gaps',
  '  for (let g = gaps.length - 1; g >= 0; g--) {',
  '    gap = gaps[g];',
  '',
  '    // Perform gapped insertion sort',
  '    for (let i = gap; i < n; i++) {',
  '      const temp = arr[i];',
  '      let j = i;',
  '',
  '      // Shift elements until correct position',
  '      while (j >= gap && arr[j - gap] > temp) {',
  '        arr[j] = arr[j - gap];',
  '        j -= gap;',
  '      }',
  '',
  '      arr[j] = temp;',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-yellow-400', label: 'Comparing (Gap Apart)' },
  { color: 'bg-red-400', label: 'Shifting' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];

export const ShellSortVisualizer = () => {
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

    // Initial state
    newSteps.push({
      array: [...array],
      gap: 0,
      currentIndex: -1,
      comparingIndex: -1,
      moving: false,
      sorted: false,
      highlightedLine: 0,
      gapPairs: [],
    });

    // Line 1: const n = arr.length;
    newSteps.push({
      array: [...array],
      gap: 0,
      currentIndex: -1,
      comparingIndex: -1,
      moving: false,
      sorted: false,
      highlightedLine: 1,
      gapPairs: [],
    });

    // Generate Knuth sequence: 1, 4, 13, 40, 121, ...
    const gaps: number[] = [];
    let gapValue = 1;
    while (gapValue < n) {
      gaps.push(gapValue);
      gapValue = gapValue * 3 + 1;
    }

    // Shell sort algorithm with decreasing gaps (Knuth sequence)
    for (let g = gaps.length - 1; g >= 0; g--) {
      const gap = gaps[g];
      // Calculate gap pairs for visualization
      const gapPairs: number[][] = [];
      for (let i = 0; i < n; i++) {
        if (i + gap < n) {
          gapPairs.push([i, i + gap]);
        }
      }

      // Line 12: for (let g = gaps.length - 1; g >= 0; g--)
      newSteps.push({
        array: [...array],
        gap: gap,
        currentIndex: -1,
        comparingIndex: -1,
        moving: false,
        sorted: false,
        highlightedLine: 12,
        gapPairs: gapPairs,
      });

      // Perform gapped insertion sort
      for (let i = gap; i < n; i++) {
        // Line 16: for (let i = gap; i < n; i++)
        newSteps.push({
          array: [...array],
          gap: gap,
          currentIndex: i,
          comparingIndex: -1,
          moving: false,
          sorted: false,
          highlightedLine: 16,
          gapPairs: gapPairs,
        });

        // Line 17: const temp = arr[i];
        const temp = array[i];
        newSteps.push({
          array: [...array],
          gap: gap,
          currentIndex: i,
          comparingIndex: -1,
          moving: false,
          sorted: false,
          highlightedLine: 17,
          gapPairs: gapPairs,
        });

        // Line 18: let j = i;
        let j = i;
        newSteps.push({
          array: [...array],
          gap: gap,
          currentIndex: i,
          comparingIndex: j,
          moving: false,
          sorted: false,
          highlightedLine: 18,
          gapPairs: gapPairs,
        });

        // Shift elements until correct position
        while (j >= gap && array[j - gap] > temp) {
          // Line 21: while (j >= gap && arr[j - gap] > temp)
          newSteps.push({
            array: [...array],
            gap: gap,
            currentIndex: i,
            comparingIndex: j - gap,
            moving: false,
            sorted: false,
            highlightedLine: 21,
            gapPairs: gapPairs,
          });

          // Line 22: arr[j] = arr[j - gap];
          newSteps.push({
            array: [...array],
            gap: gap,
            currentIndex: j,
            comparingIndex: j - gap,
            moving: true,
            sorted: false,
            highlightedLine: 22,
            gapPairs: gapPairs,
          });

          array[j] = array[j - gap];

          // Show array after shift
          newSteps.push({
            array: [...array],
            gap: gap,
            currentIndex: j,
            comparingIndex: j - gap,
            moving: true,
            sorted: false,
            highlightedLine: 22,
            gapPairs: gapPairs,
          });

          // Line 23: j -= gap;
          j -= gap;
          newSteps.push({
            array: [...array],
            gap: gap,
            currentIndex: i,
            comparingIndex: j,
            moving: false,
            sorted: false,
            highlightedLine: 23,
            gapPairs: gapPairs,
          });
        }

        // Final comparison that breaks the loop
        if (j >= gap) {
          newSteps.push({
            array: [...array],
            gap: gap,
            currentIndex: i,
            comparingIndex: j - gap,
            moving: false,
            sorted: false,
            highlightedLine: 21,
            gapPairs: gapPairs,
          });
        }

        // Line 26: arr[j] = temp;
        array[j] = temp;
        newSteps.push({
          array: [...array],
          gap: gap,
          currentIndex: j,
          comparingIndex: -1,
          moving: false,
          sorted: false,
          highlightedLine: 26,
          gapPairs: gapPairs,
        });
      }
    }

    // Line 30: return arr;
    newSteps.push({
      array: [...array],
      gap: 0,
      currentIndex: -1,
      comparingIndex: -1,
      moving: false,
      sorted: true,
      highlightedLine: 30,
      gapPairs: [],
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
    if (
      step.moving &&
      (index === step.currentIndex || index === step.comparingIndex)
    ) {
      return 'bg-red-400';
    }
    if (index === step.currentIndex) {
      return 'bg-blue-400';
    }
    if (index === step.comparingIndex) {
      return 'bg-yellow-400';
    }
    return 'bg-gray-300';
  };

  const extraInfo = controls.currentStepData?.gap > 0 ? (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Current Gap:</strong> {controls.currentStepData.gap}
      </p>
      <p className="text-xs text-blue-600 mt-1">
        Elements {controls.currentStepData.gap} positions apart are being
        compared and sorted
      </p>
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
