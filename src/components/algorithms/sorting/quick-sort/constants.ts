import type { SortingConfig } from '../types';

export const QUICK_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const quickSort = (arr: number[], low: number, high: number) => {',
  '  if (low < high) {',
  '    const pivotIndex = partition(arr, low, high);',
  '    quickSort(arr, low, pivotIndex - 1);',
  '    quickSort(arr, pivotIndex + 1, high);',
  '  }',
  '};',
  '',
  'const partition = (arr: number[], low: number, high: number) => {',
  '  const pivot = arr[high];',
  '  let i = low - 1;',
  '',
  '  for (let j = low; j < high; j++) {',
  '    if (arr[j] < pivot) {',
  '      i++;',
  '      [arr[i], arr[j]] = [arr[j], arr[i]];',
  '    }',
  '  }',
  '',
  '  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];',
  '  return i + 1;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-purple-400', label: 'Pivot' },
  { color: 'bg-blue-400', label: 'Partition Index (i)' },
  { color: 'bg-yellow-400', label: 'Comparing (j)' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
  { color: 'bg-gray-100', label: 'Outside Range' },
];
