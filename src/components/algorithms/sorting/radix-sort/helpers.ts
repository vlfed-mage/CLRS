import type { BaseSortStep } from '@/components/algorithms/sorting/types';

export interface RadixSortStep extends BaseSortStep {
  currentDigit: number;
  digitPosition: number;
  buckets: number[][];
  currentBucket: number;
  placing: boolean;
  maxDigits: number;
}

export const getDigit = (num: number, place: number): number => {
  return Math.floor(num / Math.pow(10, place)) % 10;
};

export const getBarColor = (index: number, step: RadixSortStep): string => {
  if (step.sorted) {
    return 'bg-green-400';
  }
  if (step.placing && index === step.currentDigit) {
    return 'bg-purple-400';
  }
  if (!step.placing && index === step.currentDigit) {
    return 'bg-blue-400';
  }
  return 'bg-gray-300';
};

export const generateSteps = (arr: number[]): RadixSortStep[] => {
  const newSteps: RadixSortStep[] = [];
  const array = [...arr];
  const n = array.length;

  newSteps.push({
    array: [...array],
    currentDigit: -1,
    digitPosition: 0,
    buckets: [],
    currentBucket: -1,
    placing: false,
    sorted: false,
    highlightedLine: 0,
    maxDigits: 0,
  });

  const max = Math.max(...array);
  newSteps.push({
    array: [...array],
    currentDigit: -1,
    digitPosition: 0,
    buckets: [],
    currentBucket: -1,
    placing: false,
    sorted: false,
    highlightedLine: 1,
    maxDigits: 0,
  });

  const maxDigits = Math.floor(Math.log10(max)) + 1;
  newSteps.push({
    array: [...array],
    currentDigit: -1,
    digitPosition: 0,
    buckets: [],
    currentBucket: -1,
    placing: false,
    sorted: false,
    highlightedLine: 2,
    maxDigits,
  });

  for (let digit = 0; digit < maxDigits; digit++) {
    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: digit,
      buckets: [],
      currentBucket: -1,
      placing: false,
      sorted: false,
      highlightedLine: 4,
      maxDigits,
    });

    const buckets: number[][] = Array(10)
      .fill([])
      .map(() => []);
    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: digit,
      buckets: buckets.map((b) => [...b]),
      currentBucket: -1,
      placing: false,
      sorted: false,
      highlightedLine: 5,
      maxDigits,
    });

    for (let i = 0; i < n; i++) {
      newSteps.push({
        array: [...array],
        currentDigit: i,
        digitPosition: digit,
        buckets: buckets.map((b) => [...b]),
        currentBucket: -1,
        placing: false,
        sorted: false,
        highlightedLine: 8,
        maxDigits,
      });

      const digitValue = getDigit(array[i], digit);
      newSteps.push({
        array: [...array],
        currentDigit: i,
        digitPosition: digit,
        buckets: buckets.map((b) => [...b]),
        currentBucket: digitValue,
        placing: false,
        sorted: false,
        highlightedLine: 9,
        maxDigits,
      });

      buckets[digitValue].push(array[i]);
      newSteps.push({
        array: [...array],
        currentDigit: i,
        digitPosition: digit,
        buckets: buckets.map((b) => [...b]),
        currentBucket: digitValue,
        placing: false,
        sorted: false,
        highlightedLine: 10,
        maxDigits,
      });
    }

    let index = 0;

    newSteps.push({
      array: [...array],
      currentDigit: -1,
      digitPosition: digit,
      buckets: buckets.map((b) => [...b]),
      currentBucket: -1,
      placing: true,
      sorted: false,
      highlightedLine: 14,
      maxDigits,
    });

    for (let bucket = 0; bucket < 10; bucket++) {
      newSteps.push({
        array: [...array],
        currentDigit: -1,
        digitPosition: digit,
        buckets: buckets.map((b) => [...b]),
        currentBucket: bucket,
        placing: true,
        sorted: false,
        highlightedLine: 15,
        maxDigits,
      });

      for (let i = 0; i < buckets[bucket].length; i++) {
        newSteps.push({
          array: [...array],
          currentDigit: index,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: bucket,
          placing: true,
          sorted: false,
          highlightedLine: 16,
          maxDigits,
        });

        array[index] = buckets[bucket][i];
        newSteps.push({
          array: [...array],
          currentDigit: index,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: bucket,
          placing: true,
          sorted: false,
          highlightedLine: 17,
          maxDigits,
        });

        index++;
        newSteps.push({
          array: [...array],
          currentDigit: index - 1,
          digitPosition: digit,
          buckets: buckets.map((b) => [...b]),
          currentBucket: bucket,
          placing: true,
          sorted: false,
          highlightedLine: 18,
          maxDigits,
        });
      }
    }
  }

  newSteps.push({
    array: [...array],
    currentDigit: -1,
    digitPosition: maxDigits,
    buckets: [],
    currentBucket: -1,
    placing: false,
    sorted: true,
    highlightedLine: 22,
    maxDigits,
  });

  return newSteps;
};
