import type { SortingConfig } from '../types';

export const INSERTION_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const insertionSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  for (let i = 1; i < n; i++) {',
  '    const key = arr[i];',
  '    let j = i - 1;',
  '',
  '    // Move elements greater than key',
  '    // to one position ahead',
  '    while (j >= 0 && arr[j] > key) {',
  '      arr[j + 1] = arr[j];',
  '      j = j - 1;',
  '    }',
  '    arr[j + 1] = key;',
  '  }',
  '',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-blue-500', label: 'Current Element' },
  { color: 'bg-yellow-500', label: 'Comparing' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-400', label: 'Unsorted' },
];
