import type { SortingConfig } from '../types';

export const SELECTION_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const selectionSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  for (let i = 0; i < n - 1; i++) {',
  '    let minIndex = i;',
  '',
  '    for (let j = i + 1; j < n; j++) {',
  '      if (arr[j] < arr[minIndex]) {',
  '        minIndex = j;',
  '      }',
  '    }',
  '',
  '    if (minIndex !== i) {',
  '      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Position' },
  { color: 'bg-yellow-400', label: 'Comparing' },
  { color: 'bg-purple-400', label: 'Current Min' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
