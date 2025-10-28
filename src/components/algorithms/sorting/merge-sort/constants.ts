import type { LegendItem } from '@/components/Visualizer/types';
import type { SortingConfig } from '../types';

export const MERGE_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Currently Merging' },
  { color: 'bg-yellow-400', label: 'Active Subarray' },
  { color: 'bg-green-500', label: 'Sorted' },
  { color: 'bg-gray-400', label: 'Unsorted' },
];

export const CODE_LINES: string[] = [
  'const mergeSort = (arr: number[], left: number, right: number) => {',
  '  if (left >= right) return;',
  '',
  '  const mid = Math.floor((left + right) / 2);',
  '',
  '  mergeSort(arr, left, mid);',
  '  mergeSort(arr, mid + 1, right);',
  '  merge(arr, left, mid, right);',
  '};',
  '',
  'const merge = (arr: number[], left: number, mid: number, right: number) => {',
  '  const leftArr = arr.slice(left, mid + 1);',
  '  const rightArr = arr.slice(mid + 1, right + 1);',
  '',
  '  let i = 0, j = 0, k = left;',
  '',
  '  while (i < leftArr.length && j < rightArr.length) {',
  '    if (leftArr[i] <= rightArr[j]) {',
  '      arr[k] = leftArr[i];',
  '      i++;',
  '    } else {',
  '      arr[k] = rightArr[j];',
  '      j++;',
  '    }',
  '    k++;',
  '  }',
  '',
  '  while (i < leftArr.length) {',
  '    arr[k] = leftArr[i];',
  '    i++;',
  '    k++;',
  '  }',
  '',
  '  while (j < rightArr.length) {',
  '    arr[k] = rightArr[j];',
  '    j++;',
  '    k++;',
  '  }',
  '};',
];
