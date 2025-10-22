import type { PropsWithChildren } from 'react';

interface MainContentProps extends PropsWithChildren {}

export const MainContent = ({ children }: MainContentProps) => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  );
};
