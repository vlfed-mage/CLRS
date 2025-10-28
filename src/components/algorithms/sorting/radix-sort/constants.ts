import type { SortingConfig } from '@/components/algorithms/sorting/types';
import type { LegendItem } from '@/components/Visualizer/types';

export const RADIX_SORT_CONFIG: Required<SortingConfig> = {
  arraySize: 10,
  minValue: 1,
  maxValue: 1000,
};

export const CODE_LINES: string[] = [
  'const radixSort = (arr: number[]) => {',
  '  const max = Math.max(...arr);',
  '  const maxDigits = Math.floor(Math.log10(max)) + 1;',
  '',
  '  for (let digit = 0; digit < maxDigits; digit++) {',
  '    const buckets: number[][] = Array.from({ length: 10 }, () => []);',
  '',
  '    // Distribute into buckets by current digit',
  '    for (let i = 0; i < arr.length; i++) {',
  '      const digitValue = getDigit(arr[i], digit);',
  '      buckets[digitValue].push(arr[i]);',
  '    }',
  '',
  '    // Collect from buckets back to array',
  '    let index = 0;',
  '    for (let bucket = 0; bucket < 10; bucket++) {',
  '      for (let i = 0; i < buckets[bucket].length; i++) {',
  '        arr[index] = buckets[bucket][i];',
  '        index++;',
  '      }',
  '    }',
  '  }',
  '  return arr;',
  '};',
  '',
  'const getDigit = (num: number, place: number) => {',
  '  return Math.floor(num / Math.pow(10, place)) % 10;',
  '};',
];

export const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-purple-400', label: 'Current Digit Position' },
  { color: 'bg-yellow-400', label: 'In Bucket' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
