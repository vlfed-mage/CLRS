import type { BaseSortStep } from '../types';

export interface BubbleSortStep extends BaseSortStep {
  comparingIndices: number[];
  swapped: boolean;
  passComplete: boolean;
  sortedIndices: number[];
}

export const getBarColor = (index: number, step: BubbleSortStep): string => {
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

export const generateSteps = (arr: number[]): BubbleSortStep[] => {
  const newSteps: BubbleSortStep[] = [];
  const array = [...arr];
  const n = array.length;
  const sortedIndices: number[] = [];

  newSteps.push({
    array: [...array],
    comparingIndices: [],
    swapped: false,
    passComplete: false,
    sorted: false,
    highlightedLine: 0,
    sortedIndices: [],
  });

  newSteps.push({
    array: [...array],
    comparingIndices: [],
    swapped: false,
    passComplete: false,
    sorted: false,
    highlightedLine: 1,
    sortedIndices: [],
  });

  for (let i = n - 1; i >= 1; i--) {
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
      newSteps.push({
        array: [...array],
        comparingIndices: [j, j + 1],
        swapped: false,
        passComplete: false,
        sorted: false,
        highlightedLine: 6,
        sortedIndices: [...sortedIndices],
      });

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

        newSteps.push({
          array: [...array],
          comparingIndices: [j, j + 1],
          swapped: true,
          passComplete: false,
          sorted: false,
          highlightedLine: 8,
          sortedIndices: [...sortedIndices],
        });

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

    sortedIndices.unshift(i);

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
      newSteps.push({
        array: [...array],
        comparingIndices: [],
        swapped: false,
        passComplete: true,
        sorted: false,
        highlightedLine: 14,
        sortedIndices: [...sortedIndices],
      });

      for (let k = i - 1; k >= 0; k--) {
        sortedIndices.push(k);
      }
      break;
    }
  }

  if (!sortedIndices.includes(0)) {
    sortedIndices.push(0);
  }

  newSteps.push({
    array: [...array],
    comparingIndices: [],
    swapped: false,
    passComplete: false,
    sorted: true,
    highlightedLine: 18,
    sortedIndices: [...sortedIndices],
  });

  return newSteps;
};
