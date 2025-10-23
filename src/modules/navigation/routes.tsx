import type { RouteObject } from 'react-router-dom';
import { Home } from '@/pages/Home';
import {
  Sorting,
  InsertionSort,
  MergeSort,
  BubbleSort,
  SelectionSort,
  ShellSort,
} from '@/pages/sorting';

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'sorting',
    element: <Sorting />,
  },
  {
    path: 'sorting/insertion-sort',
    element: <InsertionSort />,
  },
  {
    path: 'sorting/merge-sort',
    element: <MergeSort />,
  },
  {
    path: 'sorting/bubble-sort',
    element: <BubbleSort />,
  },
  {
    path: 'sorting/selection-sort',
    element: <SelectionSort />,
  },
  {
    path: 'sorting/shell-sort',
    element: <ShellSort />,
  },
];
