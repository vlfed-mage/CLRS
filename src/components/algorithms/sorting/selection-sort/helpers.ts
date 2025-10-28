import type { BaseSortStep } from '../types';

export interface SelectionSortStep extends BaseSortStep {
  currentIndex: number;
  minIndex: number;
  comparingIndex: number;
  swapping: boolean;
  sortedIndices: number[];
}

export const getBarColor = (
  index: number,
  step: SelectionSortStep
): string => {
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

export const generateSteps = (arr: number[]): SelectionSortStep[] => {
  const newSteps: SelectionSortStep[] = [];
  const array = [...arr];
  const n = array.length;
  const sortedIndices: number[] = [];

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

  for (let i = 0; i < n - 1; i++) {
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

    for (let j = i + 1; j < n; j++) {
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

    sortedIndices.push(i);
  }

  sortedIndices.push(n - 1);

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

  return newSteps;
};
