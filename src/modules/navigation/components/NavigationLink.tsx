import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { NavigationLinkProps } from '../types';

export const NavigationLink = ({ item, isActive }: NavigationLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClasses = 'border-indigo-500 text-gray-900';
  const inactiveClasses = 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

  if (item.children && item.children.length > 0) {
    return (
      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          to={item.path}
          className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          {item.label}
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
        {isOpen && (
          <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
            {item.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {item.label}
    </Link>
  );
};
