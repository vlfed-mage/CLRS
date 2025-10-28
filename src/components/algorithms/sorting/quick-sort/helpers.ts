import type { BaseSortStep } from '../types';

export interface QuickSortStep extends BaseSortStep {
  low: number;
  high: number;
  pivotIndex: number;
  i: number;
  j: number;
  comparing: boolean;
  swapping: boolean;
  partitioning: boolean;
  sortedIndices: number[];
  activeRange: [number, number] | null;
}

export const getBarColor = (index: number, step: QuickSortStep): string => {
  if (step.sortedIndices.includes(index)) {
    return 'bg-green-400';
  }
  if (
    step.activeRange &&
    (index < step.activeRange[0] || index > step.activeRange[1])
  ) {
    return 'bg-gray-100';
  }
  if (step.swapping && (index === step.i || index === step.j)) {
    return 'bg-red-400';
  }
  if (index === step.pivotIndex) {
    return 'bg-purple-400';
  }
  if (index === step.i && step.i >= 0) {
    return 'bg-blue-400';
  }
  if (index === step.j && step.comparing) {
    return 'bg-yellow-400';
  }
  return 'bg-gray-300';
};

export const generateSteps = (arr: number[]): QuickSortStep[] => {
  const newSteps: QuickSortStep[] = [];
  const array = [...arr];
  const n = array.length;
  const sortedIndices: number[] = [];

  newSteps.push({
    array: [...array],
    low: 0,
    high: n - 1,
    pivotIndex: -1,
    i: -1,
    j: -1,
    comparing: false,
    swapping: false,
    partitioning: false,
    sorted: false,
    highlightedLine: 0,
    sortedIndices: [],
    activeRange: null,
  });

  const partition = (low: number, high: number): number => {
    const pivot = array[high];
    newSteps.push({
      array: [...array],
      low,
      high,
      pivotIndex: high,
      i: -1,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: true,
      sorted: false,
      highlightedLine: 9,
      sortedIndices: [...sortedIndices],
      activeRange: [low, high],
    });

    let i = low - 1;
    newSteps.push({
      array: [...array],
      low,
      high,
      pivotIndex: high,
      i,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: true,
      sorted: false,
      highlightedLine: 10,
      sortedIndices: [...sortedIndices],
      activeRange: [low, high],
    });

    for (let j = low; j < high; j++) {
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: high,
        i,
        j,
        comparing: false,
        swapping: false,
        partitioning: true,
        sorted: false,
        highlightedLine: 12,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: high,
        i,
        j,
        comparing: true,
        swapping: false,
        partitioning: true,
        sorted: false,
        highlightedLine: 13,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      if (array[j] < pivot) {
        i++;
        newSteps.push({
          array: [...array],
          low,
          high,
          pivotIndex: high,
          i,
          j,
          comparing: false,
          swapping: false,
          partitioning: true,
          sorted: false,
          highlightedLine: 14,
          sortedIndices: [...sortedIndices],
          activeRange: [low, high],
        });

        newSteps.push({
          array: [...array],
          low,
          high,
          pivotIndex: high,
          i,
          j,
          comparing: false,
          swapping: true,
          partitioning: true,
          sorted: false,
          highlightedLine: 15,
          sortedIndices: [...sortedIndices],
          activeRange: [low, high],
        });

        [array[i], array[j]] = [array[j], array[i]];

        newSteps.push({
          array: [...array],
          low,
          high,
          pivotIndex: high,
          i,
          j,
          comparing: false,
          swapping: true,
          partitioning: true,
          sorted: false,
          highlightedLine: 15,
          sortedIndices: [...sortedIndices],
          activeRange: [low, high],
        });
      }
    }

    newSteps.push({
      array: [...array],
      low,
      high,
      pivotIndex: high,
      i: i + 1,
      j: high,
      comparing: false,
      swapping: true,
      partitioning: true,
      sorted: false,
      highlightedLine: 19,
      sortedIndices: [...sortedIndices],
      activeRange: [low, high],
    });

    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    newSteps.push({
      array: [...array],
      low,
      high,
      pivotIndex: i + 1,
      i: i + 1,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: true,
      sorted: false,
      highlightedLine: 19,
      sortedIndices: [...sortedIndices],
      activeRange: [low, high],
    });

    sortedIndices.push(i + 1);

    newSteps.push({
      array: [...array],
      low,
      high,
      pivotIndex: i + 1,
      i: i + 1,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: false,
      sorted: false,
      highlightedLine: 20,
      sortedIndices: [...sortedIndices],
      activeRange: [low, high],
    });

    return i + 1;
  };

  const quickSort = (low: number, high: number): void => {
    newSteps.push({
      array: [...array],
      low,
      high,
      pivotIndex: -1,
      i: -1,
      j: -1,
      comparing: false,
      swapping: false,
      partitioning: false,
      sorted: false,
      highlightedLine: 1,
      sortedIndices: [...sortedIndices],
      activeRange: [low, high],
    });

    if (low < high) {
      newSteps.push({
        array: [...array],
        low,
        high,
        pivotIndex: -1,
        i: -1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: false,
        sorted: false,
        highlightedLine: 2,
        sortedIndices: [...sortedIndices],
        activeRange: [low, high],
      });

      const pivotIndex = partition(low, high);

      newSteps.push({
        array: [...array],
        low,
        high: pivotIndex - 1,
        pivotIndex,
        i: -1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: false,
        sorted: false,
        highlightedLine: 3,
        sortedIndices: [...sortedIndices],
        activeRange: [low, pivotIndex - 1],
      });

      quickSort(low, pivotIndex - 1);

      newSteps.push({
        array: [...array],
        low: pivotIndex + 1,
        high,
        pivotIndex,
        i: -1,
        j: -1,
        comparing: false,
        swapping: false,
        partitioning: false,
        sorted: false,
        highlightedLine: 4,
        sortedIndices: [...sortedIndices],
        activeRange: [pivotIndex + 1, high],
      });

      quickSort(pivotIndex + 1, high);
    } else if (low === high) {
      sortedIndices.push(low);
    }
  };

  quickSort(0, n - 1);

  newSteps.push({
    array: [...array],
    low: 0,
    high: n - 1,
    pivotIndex: -1,
    i: -1,
    j: -1,
    comparing: false,
    swapping: false,
    partitioning: false,
    sorted: true,
    highlightedLine: 0,
    sortedIndices: Array.from({ length: n }, (_, index) => index),
    activeRange: null,
  });

  return newSteps;
};
