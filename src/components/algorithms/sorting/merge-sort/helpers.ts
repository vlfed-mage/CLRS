import type { BaseSortStep } from '../types';

export interface MergeSortStep extends BaseSortStep {
  leftIndex: number;
  rightIndex: number;
  midIndex: number;
  mergingIndices: number[];
}

export const getBarColor = (index: number, step: MergeSortStep): string => {
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

export const generateSteps = (arr: number[]): MergeSortStep[] => {
  const newSteps: MergeSortStep[] = [];
  const tempArray = [...arr];

  const merge = (
    array: number[],
    left: number,
    mid: number,
    right: number
  ): void => {
    const leftArr = array.slice(left, mid + 1);
    const rightArr = array.slice(mid + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArr.length && j < rightArr.length) {
      newSteps.push({
        array: [...array],
        leftIndex: left,
        rightIndex: right,
        midIndex: mid,
        mergingIndices: [left + i, mid + 1 + j],
        sorted: false,
        highlightedLine: 16,
      });

      if (leftArr[i] <= rightArr[j]) {
        array[k] = leftArr[i];
        i++;
        newSteps.push({
          array: [...array],
          leftIndex: left,
          rightIndex: right,
          midIndex: mid,
          mergingIndices: [k],
          sorted: false,
          highlightedLine: 18,
        });
      } else {
        array[k] = rightArr[j];
        j++;
        newSteps.push({
          array: [...array],
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
      array[k] = leftArr[i];
      newSteps.push({
        array: [...array],
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
      array[k] = rightArr[j];
      newSteps.push({
        array: [...array],
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

  const mergeSort = (array: number[], left: number, right: number): void => {
    if (left < right) {
      newSteps.push({
        array: [...array],
        leftIndex: left,
        rightIndex: right,
        midIndex: -1,
        mergingIndices: [],
        sorted: false,
        highlightedLine: 1,
      });

      const mid = Math.floor((left + right) / 2);

      newSteps.push({
        array: [...array],
        leftIndex: left,
        rightIndex: right,
        midIndex: mid,
        mergingIndices: [],
        sorted: false,
        highlightedLine: 3,
      });

      mergeSort(array, left, mid);
      mergeSort(array, mid + 1, right);
      merge(array, left, mid, right);
    }
  };

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

  newSteps.push({
    array: [...tempArray],
    leftIndex: -1,
    rightIndex: -1,
    midIndex: -1,
    mergingIndices: [],
    sorted: true,
    highlightedLine: 7,
  });

  return newSteps;
};
