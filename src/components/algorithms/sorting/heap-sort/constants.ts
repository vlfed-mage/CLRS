import type { SortingConfig } from '../types';

export const HEAP_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const heapSort = (arr: number[]) => {',
  '  const n = arr.length;',
  '',
  '  // Build max heap',
  '  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {',
  '    heapify(arr, n, i);',
  '  }',
  '',
  '  // Extract elements from heap one by one',
  '  for (let i = n - 1; i > 0; i--) {',
  '    [arr[0], arr[i]] = [arr[i], arr[0]];',
  '    heapify(arr, i, 0);',
  '  }',
  '};',
  '',
  'const heapify = (arr: number[], n: number, i: number) => {',
  '  let largest = i;',
  '  const left = 2 * i + 1;',
  '  const right = 2 * i + 2;',
  '',
  '  if (left < n && arr[left] > arr[largest]) {',
  '    largest = left;',
  '  }',
  '',
  '  if (right < n && arr[right] > arr[largest]) {',
  '    largest = right;',
  '  }',
  '',
  '  if (largest !== i) {',
  '    [arr[i], arr[largest]] = [arr[largest], arr[i]];',
  '    heapify(arr, n, largest);',
  '  }',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-purple-400', label: 'Root/Current Node' },
  { color: 'bg-blue-400', label: 'Left Child' },
  { color: 'bg-cyan-400', label: 'Right Child' },
  { color: 'bg-yellow-400', label: 'Largest' },
  { color: 'bg-red-400', label: 'Swapping' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Heap' },
  { color: 'bg-gray-100', label: 'Outside Heap' },
];
