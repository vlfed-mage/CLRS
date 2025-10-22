import { useLocation } from 'react-router-dom';
import type { NavigationItem } from '../types';

export function useNavigationState(items: NavigationItem[]) {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return {
    items,
    isActive,
  };
}
