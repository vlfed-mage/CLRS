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
    ],
  },
];
