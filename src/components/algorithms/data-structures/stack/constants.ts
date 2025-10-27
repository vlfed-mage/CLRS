import type { LegendItem } from '@/components/Visualizer';
import type { DataStructureConfig } from '../types';

export const CODE_LINES = [
  'class Stack {',
  '  constructor() {',
  '    this.items = [];',
  '  }',
  '',
  '  push(element) {',
  '    this.items.push(element);',
  '  }',
  '',
  '  pop() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items.pop();',
  '  }',
  '',
  '  peek() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items[this.items.length - 1];',
  '  }',
  '',
  '  isEmpty() {',
  '    return this.items.length === 0;',
  '  }',
  '}',
];

export const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Stack Elements' },
  { color: 'bg-green-500', label: 'Top (Current Operation)' },
  { color: 'bg-gray-300', label: 'Empty Slots' },
];

export const STACK_CONFIG: DataStructureConfig = {
  maxSize: 10,
  initialSize: 8,
  minValue: 1,
  maxValue: 99,
};
