import type { NavigationItem } from './types';

export const navigationConfig: NavigationItem[] = [
  { path: '/', label: 'Home' },
  {
    path: '/sorting',
    label: 'Sorting',
    children: [
      { path: '/sorting/insertion-sort', label: 'Insertion Sort' },
      { path: '/sorting/merge-sort', label: 'Merge Sort' },
      { path: '/sorting/bubble-sort', label: 'Bubble Sort' },
      { path: '/sorting/selection-sort', label: 'Selection Sort' },
      { path: '/sorting/shell-sort', label: 'Shell Sort' },
      { path: '/sorting/quick-sort', label: 'Quick Sort' },
      { path: '/sorting/heap-sort', label: 'Heap Sort' },
      { path: '/sorting/counting-sort', label: 'Counting Sort' },
      { path: '/sorting/radix-sort', label: 'Radix Sort' },
      { path: '/sorting/bucket-sort', label: 'Bucket Sort' },
    ],
  },
  {
    path: '/data-structures',
    label: 'Data Structures',
    children: [
      { path: '/data-structures/stack', label: 'Stack' },
      { path: '/data-structures/queue', label: 'Queue' },
      { path: '/data-structures/linked-list', label: 'Linked List' },
      { path: '/data-structures/hash-table', label: 'Hash Table' },
    ],
  },
];
