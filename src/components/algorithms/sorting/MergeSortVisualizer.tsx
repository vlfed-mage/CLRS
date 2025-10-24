import { useState, useEffect } from 'react';
import type { LegendItem } from '@/components/Visualizer';
import { AlgorithmVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  leftIndex: number;
  rightIndex: number;
  midIndex: number;
  mergingIndices: number[];
  sorted: boolean;
  highlightedLine: number;
}

const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Currently Merging' },
  { color: 'bg-yellow-400', label: 'Active Subarray' },
  { color: 'bg-green-500', label: 'Sorted' },
  { color: 'bg-gray-400', label: 'Unsorted' },
];

const CODE_LINES = [
  'const mergeSort = (arr: number[], left: number, right: number) => {',
  '  if (left >= right) return;',
  '',
  '  const mid = Math.floor((left + right) / 2);',
  '',
  '  mergeSort(arr, left, mid);',
  '  mergeSort(arr, mid + 1, right);',
  '  merge(arr, left, mid, right);',
  '};',
  '',
  'const merge = (arr: number[], left: number, mid: number, right: number) => {',
  '  const leftArr = arr.slice(left, mid + 1);',
  '  const rightArr = arr.slice(mid + 1, right + 1);',
  '',
  '  let i = 0, j = 0, k = left;',
  '',
  '  while (i < leftArr.length && j < rightArr.length) {',
  '    if (leftArr[i] <= rightArr[j]) {',
  '      arr[k] = leftArr[i];',
  '      i++;',
  '    } else {',
  '      arr[k] = rightArr[j];',
  '      j++;',
  '    }',
  '    k++;',
  '  }',
  '',
  '  while (i < leftArr.length) {',
  '    arr[k] = leftArr[i];',
  '    i++;',
  '    k++;',
  '  }',
  '',
  '  while (j < rightArr.length) {',
  '    arr[k] = rightArr[j];',
  '    j++;',
  '    k++;',
  '  }',
  '};',
];

export const MergeSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

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
          highlightedLine: 16,
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
            highlightedLine: 18,
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
            highlightedLine: 21,
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
          highlightedLine: 27,
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
          highlightedLine: 33,
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
          highlightedLine: 1,
        });

        const mid = Math.floor((left + right) / 2);

        newSteps.push({
          array: [...arr],
          leftIndex: left,
          rightIndex: right,
          midIndex: mid,
          mergingIndices: [],
          sorted: false,
          highlightedLine: 3,
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
      highlightedLine: 0,
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
      highlightedLine: 7,
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
    if (step.mergingIndices.includes(index)) return 'bg-blue-500';
    if (
      index >= step.leftIndex &&
      index <= step.rightIndex &&
      step.leftIndex !== -1
    )
      return 'bg-yellow-400';
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
