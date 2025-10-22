import type { RouteObject } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Sorting, InsertionSort } from '../../pages/sorting';

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
];
