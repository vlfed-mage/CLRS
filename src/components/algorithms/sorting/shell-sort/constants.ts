import type { SortingConfig } from '../types';

export const SHELL_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const shellSort = (arr: number[]): number[] => {',
  '  const n = arr.length;',
  '',
  '  // Generate Knuth sequence: 1, 4, 13, 40, 121, ...',
  '  const gaps: number[] = [];',
  '  let gap = 1;',
  '  while (gap < n) {',
  '    gaps.push(gap);',
  '    gap = gap * 3 + 1; // (3^k - 1) / 2',
  '  }',
  '',
  '  // Sort with decreasing gaps',
  '  for (let g = gaps.length - 1; g >= 0; g--) {',
  '    gap = gaps[g];',
  '',
  '    // Perform gapped insertion sort',
  '    for (let i = gap; i < n; i++) {',
  '      const temp = arr[i];',
  '      let j = i;',
  '',
  '      // Shift elements until correct position',
  '      while (j >= gap && arr[j - gap] > temp) {',
  '        arr[j] = arr[j - gap];',
  '        j -= gap;',
  '      }',
  '',
  '      arr[j] = temp;',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-yellow-400', label: 'Comparing (Gap Apart)' },
  { color: 'bg-red-400', label: 'Shifting' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
