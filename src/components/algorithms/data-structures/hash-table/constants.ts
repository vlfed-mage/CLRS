import type { LegendItem } from '@/components/Visualizer';
import type { DataStructureConfig } from '../types';

export const CODE_LINES = [
  'class HashTable {',
  '  constructor(size) {',
  '    this.table = Array.from({ length: size }, () => []);',
  '  }',
  '',
  '  insert(key, value) {',
  '    const index = this.hash(key);',
  '    this.table[index].push({ key, value });',
  '  }',
  '',
  '  search(key) {',
  '    const index = this.hash(key);',
  '    const bucket = this.table[index];',
  '    const entry = bucket.find(e => e.key === key);',
  '    return entry ? entry.value : undefined;',
  '  }',
  '',
  '  delete(key) {',
  '    const index = this.hash(key);',
  '    const bucket = this.table[index];',
  '    const entryIndex = bucket.findIndex(e => e.key === key);',
  '    if (entryIndex >= 0) bucket.splice(entryIndex, 1);',
  '  }',
  '',
  '  hash(key) {',
  '    return key % this.table.length;',
  '  }',
  '}',
];

export const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Hash Table Entries' },
  { color: 'bg-green-500', label: 'Current Operation' },
  { color: 'bg-yellow-500', label: 'Collision (Multiple Entries)' },
  { color: 'bg-gray-200', label: 'Empty Bucket' },
];

export const HASH_TABLE_CONFIG: DataStructureConfig = {
  maxSize: 21,
  initialSize: 8,
  minValue: 10,
  maxValue: 99,
};
