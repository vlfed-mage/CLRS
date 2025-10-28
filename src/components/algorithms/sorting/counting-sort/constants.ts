import type { SortingConfig } from '../types';

export const COUNTING_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 20,
};

export const CODE_LINES: string[] = [
  'const countingSort = (arr: number[]) => {',
  '  const max = Math.max(...arr);',
  '  const count = new Array(max + 1).fill(0);',
  '',
  '  // Count occurrences',
  '  for (let i = 0; i < arr.length; i++) {',
  '    count[arr[i]]++;',
  '  }',
  '',
  '  // Build output array',
  '  let outputIndex = 0;',
  '  for (let i = 0; i <= max; i++) {',
  '    while (count[i] > 0) {',
  '      arr[outputIndex] = i;',
  '      outputIndex++;',
  '      count[i]--;',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-purple-400', label: 'Counting/Placing' },
  { color: 'bg-green-400', label: 'Placed in Output' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
