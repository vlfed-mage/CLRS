import type { NavigationItem } from './types';

export const navigationConfig: NavigationItem[] = [
  { path: '/', label: 'Home' },
  {
    path: '/sorting',
    label: 'Sorting',
    children: [
      { path: '/sorting/insertion-sort', label: 'Insertion Sort' },
    ],
  },
];
