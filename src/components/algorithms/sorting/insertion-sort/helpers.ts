import type { BaseSortStep } from '../types';

export interface InsertionSortStep extends BaseSortStep {
  currentIndex: number;
  comparingIndex: number;
}

export const getBarColor = (
  index: number,
  step: InsertionSortStep
): string => {
  if (step.sorted) {
    return 'bg-green-500';
  }
  if (index === step.currentIndex) {
    return 'bg-blue-500';
  }
  if (index === step.comparingIndex) {
    return 'bg-yellow-500';
  }
  if (index < step.currentIndex && step.currentIndex !== -1) {
    return 'bg-green-400';
  }
  return 'bg-gray-400';
};

export const generateSteps = (arr: number[]): InsertionSortStep[] => {
  const newSteps: InsertionSortStep[] = [];
  const tempArray = [...arr];

  newSteps.push({
    array: [...tempArray],
    currentIndex: -1,
    comparingIndex: -1,
    sorted: false,
    highlightedLine: 1,
  });

  for (let i = 1; i < tempArray.length; i++) {
    newSteps.push({
      array: [...tempArray],
      currentIndex: i,
      comparingIndex: -1,
      sorted: false,
      highlightedLine: 4,
    });

    const key = tempArray[i];

    let j = i - 1;
    newSteps.push({
      array: [...tempArray],
      currentIndex: i,
      comparingIndex: j,
      sorted: false,
      highlightedLine: 5,
    });

    while (j >= 0 && tempArray[j] > key) {
      newSteps.push({
        array: [...tempArray],
        currentIndex: i,
        comparingIndex: j,
        sorted: false,
        highlightedLine: 9,
      });

      tempArray[j + 1] = tempArray[j];
      newSteps.push({
        array: [...tempArray],
        currentIndex: i,
        comparingIndex: j,
        sorted: false,
        highlightedLine: 10,
      });

      j = j - 1;
      newSteps.push({
        array: [...tempArray],
        currentIndex: j + 1,
        comparingIndex: j,
        sorted: false,
        highlightedLine: 11,
      });
    }

    tempArray[j + 1] = key;
    newSteps.push({
      array: [...tempArray],
      currentIndex: j + 1,
      comparingIndex: -1,
      sorted: false,
      highlightedLine: 13,
    });
  }

  newSteps.push({
    array: [...tempArray],
    currentIndex: -1,
    comparingIndex: -1,
    sorted: true,
    highlightedLine: 16,
  });

  return newSteps;
};
