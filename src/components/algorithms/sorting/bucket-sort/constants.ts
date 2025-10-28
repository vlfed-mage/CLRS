import type { SortingConfig } from '../types';

export const BUCKET_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const bucketSort = (arr: number[]) => {',
  '  const n = arr.length;',
  '  const buckets: number[][] = Array(n).fill([]).map(() => []);',
  '',
  '  // Find min and max for normalization',
  '  const min = Math.min(...arr);',
  '  const max = Math.max(...arr);',
  '  const range = max - min;',
  '',
  '  // Distribute elements into buckets',
  '  for (let i = 0; i < n; i++) {',
  '    const bucketIndex = Math.floor(((arr[i] - min) / range) * (n - 1));',
  '    buckets[bucketIndex].push(arr[i]);',
  '  }',
  '',
  '  // Sort individual buckets (typically insertion sort)',
  '  for (let i = 0; i < n; i++) {',
  '    if (buckets[i].length > 1) {',
  '      buckets[i].sort((a, b) => a - b);',
  '    }',
  '  }',
  '',
  '  // Concatenate all buckets',
  '  let index = 0;',
  '  for (let i = 0; i < n; i++) {',
  '    for (let j = 0; j < buckets[i].length; j++) {',
  '      arr[index] = buckets[i][j];',
  '      index++;',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-purple-400', label: 'In Bucket' },
  { color: 'bg-yellow-400', label: 'Sorting Bucket' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
