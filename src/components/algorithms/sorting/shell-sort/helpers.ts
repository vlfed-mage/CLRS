import type { BaseSortStep } from '../types';

export interface ShellSortStep extends BaseSortStep {
  gap: number;
  currentIndex: number;
  comparingIndex: number;
  moving: boolean;
  gapPairs: number[][];
}

export const getBarColor = (index: number, step: ShellSortStep): string => {
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

export const generateSteps = (arr: number[]): ShellSortStep[] => {
  const newSteps: ShellSortStep[] = [];
  const array = [...arr];
  const n = array.length;

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

  const gaps: number[] = [];
  let gapValue = 1;
  while (gapValue < n) {
    gaps.push(gapValue);
    gapValue = gapValue * 3 + 1;
  }

  for (let g = gaps.length - 1; g >= 0; g--) {
    const gap = gaps[g];
    const gapPairs: number[][] = [];
    for (let i = 0; i < n; i++) {
      if (i + gap < n) {
        gapPairs.push([i, i + gap]);
      }
    }

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

    for (let i = gap; i < n; i++) {
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

      while (j >= gap && array[j - gap] > temp) {
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

  return newSteps;
};
