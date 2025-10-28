import type { BaseSortStep } from '../types';

export interface HeapSortStep extends BaseSortStep {
  heapSize: number;
  currentIndex: number;
  largest: number;
  left: number;
  right: number;
  swapping: boolean;
  building: boolean;
  sorting: boolean;
  sortedIndices: number[];
}

export const getBarColor = (index: number, step: HeapSortStep): string => {
  if (step.sortedIndices.includes(index)) {
    return 'bg-green-400';
  }
  if (index >= step.heapSize) {
    return 'bg-gray-100';
  }
  if (
    step.swapping &&
    (index === step.currentIndex || index === step.largest)
  ) {
    return 'bg-red-400';
  }
  if (index === step.currentIndex) {
    return 'bg-purple-400';
  }
  if (index === step.largest && step.largest !== step.currentIndex) {
    return 'bg-yellow-400';
  }
  if (index === step.left) {
    return 'bg-blue-400';
  }
  if (index === step.right) {
    return 'bg-cyan-400';
  }
  return 'bg-gray-300';
};

export const generateSteps = (arr: number[]): HeapSortStep[] => {
  const newSteps: HeapSortStep[] = [];
  const array = [...arr];
  const n = array.length;
  const sortedIndices: number[] = [];

  newSteps.push({
    array: [...array],
    heapSize: n,
    currentIndex: -1,
    largest: -1,
    left: -1,
    right: -1,
    swapping: false,
    building: false,
    sorting: false,
    sorted: false,
    highlightedLine: 0,
    sortedIndices: [],
  });

  newSteps.push({
    array: [...array],
    heapSize: n,
    currentIndex: -1,
    largest: -1,
    left: -1,
    right: -1,
    swapping: false,
    building: false,
    sorting: false,
    sorted: false,
    highlightedLine: 1,
    sortedIndices: [],
  });

  const heapify = (heapSize: number, i: number): void => {
    let largest = i;
    newSteps.push({
      array: [...array],
      heapSize,
      currentIndex: i,
      largest: i,
      left: -1,
      right: -1,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 16,
      sortedIndices: [...sortedIndices],
    });

    const left = 2 * i + 1;
    newSteps.push({
      array: [...array],
      heapSize,
      currentIndex: i,
      largest,
      left,
      right: -1,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 17,
      sortedIndices: [...sortedIndices],
    });

    const right = 2 * i + 2;
    newSteps.push({
      array: [...array],
      heapSize,
      currentIndex: i,
      largest,
      left,
      right,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 18,
      sortedIndices: [...sortedIndices],
    });

    newSteps.push({
      array: [...array],
      heapSize,
      currentIndex: i,
      largest,
      left,
      right,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 20,
      sortedIndices: [...sortedIndices],
    });

    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 21,
        sortedIndices: [...sortedIndices],
      });
    }

    newSteps.push({
      array: [...array],
      heapSize,
      currentIndex: i,
      largest,
      left,
      right,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 24,
      sortedIndices: [...sortedIndices],
    });

    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 25,
        sortedIndices: [...sortedIndices],
      });
    }

    newSteps.push({
      array: [...array],
      heapSize,
      currentIndex: i,
      largest,
      left,
      right,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 28,
      sortedIndices: [...sortedIndices],
    });

    if (largest !== i) {
      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: true,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 29,
        sortedIndices: [...sortedIndices],
      });

      [array[i], array[largest]] = [array[largest], array[i]];

      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: i,
        largest,
        left,
        right,
        swapping: true,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 29,
        sortedIndices: [...sortedIndices],
      });

      newSteps.push({
        array: [...array],
        heapSize,
        currentIndex: largest,
        largest: -1,
        left: -1,
        right: -1,
        swapping: false,
        building: true,
        sorting: false,
        sorted: false,
        highlightedLine: 30,
        sortedIndices: [...sortedIndices],
      });

      heapify(heapSize, largest);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    newSteps.push({
      array: [...array],
      heapSize: n,
      currentIndex: i,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 4,
      sortedIndices: [],
    });

    newSteps.push({
      array: [...array],
      heapSize: n,
      currentIndex: i,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: true,
      sorting: false,
      sorted: false,
      highlightedLine: 5,
      sortedIndices: [],
    });

    heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    newSteps.push({
      array: [...array],
      heapSize: i + 1,
      currentIndex: 0,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: false,
      sorting: true,
      sorted: false,
      highlightedLine: 9,
      sortedIndices: [...sortedIndices],
    });

    newSteps.push({
      array: [...array],
      heapSize: i + 1,
      currentIndex: 0,
      largest: i,
      left: -1,
      right: -1,
      swapping: true,
      building: false,
      sorting: true,
      sorted: false,
      highlightedLine: 10,
      sortedIndices: [...sortedIndices],
    });

    [array[0], array[i]] = [array[i], array[0]];

    newSteps.push({
      array: [...array],
      heapSize: i + 1,
      currentIndex: 0,
      largest: i,
      left: -1,
      right: -1,
      swapping: true,
      building: false,
      sorting: true,
      sorted: false,
      highlightedLine: 10,
      sortedIndices: [...sortedIndices],
    });

    sortedIndices.unshift(i);

    newSteps.push({
      array: [...array],
      heapSize: i,
      currentIndex: 0,
      largest: -1,
      left: -1,
      right: -1,
      swapping: false,
      building: false,
      sorting: true,
      sorted: false,
      highlightedLine: 11,
      sortedIndices: [...sortedIndices],
    });

    heapify(i, 0);
  }

  sortedIndices.unshift(0);

  newSteps.push({
    array: [...array],
    heapSize: 0,
    currentIndex: -1,
    largest: -1,
    left: -1,
    right: -1,
    swapping: false,
    building: false,
    sorting: false,
    sorted: true,
    highlightedLine: 0,
    sortedIndices: [...sortedIndices],
  });

  return newSteps;
};
