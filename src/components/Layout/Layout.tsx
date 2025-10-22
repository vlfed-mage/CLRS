import type { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
};
