import type { LegendItem } from '@/components/Visualizer';
import type { DataStructureConfig } from '../types';

export const CODE_LINES = [
  'class Queue {',
  '  constructor() {',
  '    this.items = [];',
  '  }',
  '',
  '  enqueue(element) {',
  '    this.items.push(element);',
  '  }',
  '',
  '  dequeue() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items.shift();',
  '  }',
  '',
  '  peek() {',
  '    if (this.isEmpty()) {',
  '      return undefined;',
  '    }',
  '    return this.items[0];',
  '  }',
  '',
  '  isEmpty() {',
  '    return this.items.length === 0;',
  '  }',
  '',
  '  size() {',
  '    return this.items.length;',
  '  }',
  '}',
];

export const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Queue Elements' },
  { color: 'bg-green-500', label: 'Front (Next to Dequeue)' },
  { color: 'bg-purple-500', label: 'Rear (Last Enqueued)' },
  { color: 'bg-gray-300', label: 'Empty/Dequeued' },
];

export const QUEUE_CONFIG: DataStructureConfig = {
  maxSize: 10,
  initialSize: 8,
  minValue: 1,
  maxValue: 99,
};
