import { NavigationLink } from './components/NavigationLink';
import { useNavigationState } from './hooks/useNavigationState';
import { navigationConfig } from './config';
import type { NavigationItem } from './types';

interface NavigationProps {
  items?: NavigationItem[];
}

export const Navigation = ({ items = navigationConfig }: NavigationProps) => {
  const { items: navigationItems, isActive } = useNavigationState(items);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-16">
          {navigationItems.map((item) => (
            <NavigationLink
              key={item.path}
              item={item}
              isActive={isActive(item.path)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
