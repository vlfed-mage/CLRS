import type { BaseSortStep } from '../types';

export interface BucketSortStep extends BaseSortStep {
  buckets: number[][];
  currentElement: number;
  currentBucket: number;
  distributing: boolean;
  sorting: boolean;
  collecting: boolean;
  numBuckets: number;
}

export const getBarColor = (index: number, step: BucketSortStep): string => {
  if (step.sorted) {
    return 'bg-green-400';
  }
  if (step.distributing && index === step.currentElement) {
    return 'bg-blue-400';
  }
  if (step.collecting && index === step.currentElement) {
    return 'bg-purple-400';
  }
  return 'bg-gray-300';
};

export const generateSteps = (arr: number[]): BucketSortStep[] => {
  const newSteps: BucketSortStep[] = [];
  const array = [...arr];
  const n = array.length;

  newSteps.push({
    array: [...array],
    buckets: [],
    currentElement: -1,
    currentBucket: -1,
    distributing: false,
    sorting: false,
    collecting: false,
    sorted: false,
    highlightedLine: 0,
    numBuckets: n,
  });

  newSteps.push({
    array: [...array],
    buckets: [],
    currentElement: -1,
    currentBucket: -1,
    distributing: false,
    sorting: false,
    collecting: false,
    sorted: false,
    highlightedLine: 1,
    numBuckets: n,
  });

  const buckets: number[][] = Array(n)
    .fill([])
    .map(() => []);
  newSteps.push({
    array: [...array],
    buckets: buckets.map((bucket) => [...bucket]),
    currentElement: -1,
    currentBucket: -1,
    distributing: false,
    sorting: false,
    collecting: false,
    sorted: false,
    highlightedLine: 2,
    numBuckets: n,
  });

  const min = Math.min(...array);
  const max = Math.max(...array);
  const range = max - min;

  newSteps.push({
    array: [...array],
    buckets: buckets.map((bucket) => [...bucket]),
    currentElement: -1,
    currentBucket: -1,
    distributing: false,
    sorting: false,
    collecting: false,
    sorted: false,
    highlightedLine: 5,
    numBuckets: n,
  });

  if (range === 0) {
    for (let i = 0; i < n; i++) {
      buckets[0].push(array[i]);
    }
    newSteps.push({
      array: [...array],
      buckets: buckets.map((bucket) => [...bucket]),
      currentElement: -1,
      currentBucket: 0,
      distributing: true,
      sorting: false,
      collecting: false,
      sorted: false,
      highlightedLine: 12,
      numBuckets: n,
    });
  } else {
    for (let i = 0; i < n; i++) {
      newSteps.push({
        array: [...array],
        buckets: buckets.map((bucket) => [...bucket]),
        currentElement: i,
        currentBucket: -1,
        distributing: true,
        sorting: false,
        collecting: false,
        sorted: false,
        highlightedLine: 10,
        numBuckets: n,
      });

      const bucketIndex = Math.floor(((array[i] - min) / range) * (n - 1));
      newSteps.push({
        array: [...array],
        buckets: buckets.map((bucket) => [...bucket]),
        currentElement: i,
        currentBucket: bucketIndex,
        distributing: true,
        sorting: false,
        collecting: false,
        sorted: false,
        highlightedLine: 11,
        numBuckets: n,
      });

      buckets[bucketIndex].push(array[i]);
      newSteps.push({
        array: [...array],
        buckets: buckets.map((bucket) => [...bucket]),
        currentElement: i,
        currentBucket: bucketIndex,
        distributing: true,
        sorting: false,
        collecting: false,
        sorted: false,
        highlightedLine: 12,
        numBuckets: n,
      });
    }
  }

  for (let i = 0; i < n; i++) {
    newSteps.push({
      array: [...array],
      buckets: buckets.map((bucket) => [...bucket]),
      currentElement: -1,
      currentBucket: i,
      distributing: false,
      sorting: false,
      collecting: false,
      sorted: false,
      highlightedLine: 16,
      numBuckets: n,
    });

    if (buckets[i].length <= 1) continue;

    newSteps.push({
      array: [...array],
      buckets: buckets.map((bucket) => [...bucket]),
      currentElement: -1,
      currentBucket: i,
      distributing: false,
      sorting: true,
      collecting: false,
      sorted: false,
      highlightedLine: 17,
      numBuckets: n,
    });

    buckets[i].sort((a, b) => a - b);
    newSteps.push({
      array: [...array],
      buckets: buckets.map((bucket) => [...bucket]),
      currentElement: -1,
      currentBucket: i,
      distributing: false,
      sorting: true,
      collecting: false,
      sorted: false,
      highlightedLine: 18,
      numBuckets: n,
    });
  }

  let index = 0;

  newSteps.push({
    array: [...array],
    buckets: buckets.map((bucket) => [...bucket]),
    currentElement: -1,
    currentBucket: -1,
    distributing: false,
    sorting: false,
    collecting: true,
    sorted: false,
    highlightedLine: 23,
    numBuckets: n,
  });

  for (let i = 0; i < n; i++) {
    newSteps.push({
      array: [...array],
      buckets: buckets.map((bucket) => [...bucket]),
      currentElement: index,
      currentBucket: i,
      distributing: false,
      sorting: false,
      collecting: true,
      sorted: false,
      highlightedLine: 24,
      numBuckets: n,
    });

    for (let j = 0; j < buckets[i].length; j++) {
      newSteps.push({
        array: [...array],
        buckets: buckets.map((bucket) => [...bucket]),
        currentElement: index,
        currentBucket: i,
        distributing: false,
        sorting: false,
        collecting: true,
        sorted: false,
        highlightedLine: 25,
        numBuckets: n,
      });

      array[index] = buckets[i][j];
      newSteps.push({
        array: [...array],
        buckets: buckets.map((bucket) => [...bucket]),
        currentElement: index,
        currentBucket: i,
        distributing: false,
        sorting: false,
        collecting: true,
        sorted: false,
        highlightedLine: 26,
        numBuckets: n,
      });

      index++;
      newSteps.push({
        array: [...array],
        buckets: buckets.map((bucket) => [...bucket]),
        currentElement: index - 1,
        currentBucket: i,
        distributing: false,
        sorting: false,
        collecting: true,
        sorted: false,
        highlightedLine: 27,
        numBuckets: n,
      });
    }
  }

  newSteps.push({
    array: [...array],
    buckets: buckets.map((bucket) => [...bucket]),
    currentElement: -1,
    currentBucket: -1,
    distributing: false,
    sorting: false,
    collecting: false,
    sorted: true,
    highlightedLine: 31,
    numBuckets: n,
  });

  return newSteps;
};
