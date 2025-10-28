import type { SortingConfig } from '../types';

export const BUBBLE_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const bubbleSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  for (let i = n - 1; i >= 1; i--) {',
  '    let swapped = false;',
  '',
  '    for (let j = 0; j < i; j++) {',
  '      if (arr[j] > arr[j + 1]) {',
  '        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];',
  '        swapped = true;',
  '      }',
  '    }',
  '',
  '    if (!swapped) {',
  '      break; // Array is sorted',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-yellow-400', label: 'Comparing' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
