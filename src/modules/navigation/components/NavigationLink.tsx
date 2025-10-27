import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import type { NavigationLinkProps } from '../types';
import { ChevronDown } from '@/components/Icons';

export const NavigationLink = ({ item, isActive }: NavigationLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeClasses = 'border-indigo-500 text-gray-900';
  const inactiveClasses =
    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

  if (item.children && item.children.length > 0) {
    // Check if any child is active
    const isAnyChildActive = item.children.some(
      (child) => location.pathname === child.path
    );
    const parentActive = isActive || isAnyChildActive;

    return (
      <div
        className="relative flex items-center h-16"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          to={item.path}
          className={`inline-flex items-center px-1 h-full border-b-2 text-sm font-medium ${
            parentActive ? activeClasses : inactiveClasses
          }`}
        >
          {item.label}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        {isOpen && (
          <div
            className={clsx(
              'absolute left-0 top-full w-56',
              'bg-white rounded-b-md shadow-lg',
              'border-t border-x border-b border-gray-200',
              'z-50'
            )}
          >
            {item.children.map((child) => {
              const isChildActive = location.pathname === child.path;
              return (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isChildActive
                      ? 'text-indigo-600 bg-indigo-50 font-semibold'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={`inline-flex items-center px-1 border-b-2 text-sm font-medium ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {item.label}
    </Link>
  );
};
