import type { PropsWithChildren } from 'react';

interface PageLayoutProps extends PropsWithChildren {}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 pb-16">
      {children}
    </div>
  );
};
