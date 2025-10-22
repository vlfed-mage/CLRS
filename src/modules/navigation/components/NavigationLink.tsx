import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { NavigationLinkProps } from '../types';
import { ChevronDown } from '../../../components/Icons';

export const NavigationLink = ({ item, isActive }: NavigationLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClasses = 'border-indigo-500 text-gray-900';
  const inactiveClasses = 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

  if (item.children && item.children.length > 0) {
    return (
      <div
        className="relative flex items-center h-16"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          to={item.path}
          className={`inline-flex items-center px-1 h-full border-b-2 text-sm font-medium ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          {item.label}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        {isOpen && (
          <div className="absolute left-0 top-full w-56 bg-white rounded-b-md shadow-lg border-t border-x border-b border-gray-200 z-50">
            {item.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className="block px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {child.label}
              </Link>
            ))}
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
