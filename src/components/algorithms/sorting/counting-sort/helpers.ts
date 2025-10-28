import type { BaseSortStep } from '../types';

export interface CountingSortStep extends BaseSortStep {
  countArray: number[];
  outputArray: number[];
  currentIndex: number;
  countingPhase: boolean;
  buildingOutput: boolean;
  currentValue: number;
  maxValue: number;
}

export const getBarColor = (index: number, step: CountingSortStep): string => {
  if (step.sorted) {
    return 'bg-green-400';
  }
  if (step.countingPhase && index === step.currentIndex) {
    return 'bg-blue-400';
  }
  if (step.buildingOutput && index === step.currentIndex) {
    return 'bg-purple-400';
  }
  return 'bg-gray-300';
};

export const generateSteps = (arr: number[]): CountingSortStep[] => {
  const newSteps: CountingSortStep[] = [];
  const array = [...arr];
  const n = array.length;

  newSteps.push({
    array: [...array],
    countArray: [],
    outputArray: new Array(n).fill(-1),
    currentIndex: -1,
    countingPhase: false,
    buildingOutput: false,
    sorted: false,
    highlightedLine: 0,
    currentValue: -1,
    maxValue: -1,
  });

  const max = Math.max(...array);
  newSteps.push({
    array: [...array],
    countArray: [],
    outputArray: new Array(n).fill(-1),
    currentIndex: -1,
    countingPhase: false,
    buildingOutput: false,
    sorted: false,
    highlightedLine: 1,
    currentValue: -1,
    maxValue: max,
  });

  const count = new Array(max + 1).fill(0);
  newSteps.push({
    array: [...array],
    countArray: [...count],
    outputArray: new Array(n).fill(-1),
    currentIndex: -1,
    countingPhase: false,
    buildingOutput: false,
    sorted: false,
    highlightedLine: 2,
    currentValue: -1,
    maxValue: max,
  });

  for (let i = 0; i < n; i++) {
    newSteps.push({
      array: [...array],
      countArray: [...count],
      outputArray: new Array(n).fill(-1),
      currentIndex: i,
      countingPhase: true,
      buildingOutput: false,
      sorted: false,
      highlightedLine: 5,
      currentValue: array[i],
      maxValue: max,
    });

    count[array[i]]++;
    newSteps.push({
      array: [...array],
      countArray: [...count],
      outputArray: new Array(n).fill(-1),
      currentIndex: i,
      countingPhase: true,
      buildingOutput: false,
      sorted: false,
      highlightedLine: 6,
      currentValue: array[i],
      maxValue: max,
    });
  }

  const output = new Array(n).fill(-1);
  let outputIndex = 0;

  newSteps.push({
    array: [...array],
    countArray: [...count],
    outputArray: [...output],
    currentIndex: -1,
    countingPhase: false,
    buildingOutput: true,
    sorted: false,
    highlightedLine: 10,
    currentValue: -1,
    maxValue: max,
  });

  for (let i = 0; i <= max; i++) {
    newSteps.push({
      array: [...array],
      countArray: [...count],
      outputArray: [...output],
      currentIndex: -1,
      countingPhase: false,
      buildingOutput: true,
      sorted: false,
      highlightedLine: 11,
      currentValue: i,
      maxValue: max,
    });

    while (count[i] > 0) {
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: [...output],
        currentIndex: outputIndex,
        countingPhase: false,
        buildingOutput: true,
        sorted: false,
        highlightedLine: 12,
        currentValue: i,
        maxValue: max,
      });

      output[outputIndex] = i;
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: [...output],
        currentIndex: outputIndex,
        countingPhase: false,
        buildingOutput: true,
        sorted: false,
        highlightedLine: 13,
        currentValue: i,
        maxValue: max,
      });

      outputIndex++;
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: [...output],
        currentIndex: outputIndex - 1,
        countingPhase: false,
        buildingOutput: true,
        sorted: false,
        highlightedLine: 14,
        currentValue: i,
        maxValue: max,
      });

      count[i]--;
      newSteps.push({
        array: [...array],
        countArray: [...count],
        outputArray: [...output],
        currentIndex: outputIndex - 1,
        countingPhase: false,
        buildingOutput: true,
        sorted: false,
        highlightedLine: 15,
        currentValue: i,
        maxValue: max,
      });
    }
  }

  newSteps.push({
    array: [...output],
    countArray: [...count],
    outputArray: [...output],
    currentIndex: -1,
    countingPhase: false,
    buildingOutput: false,
    sorted: true,
    highlightedLine: 19,
    currentValue: -1,
    maxValue: max,
  });

  return newSteps;
};
