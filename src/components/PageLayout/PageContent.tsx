import type { ReactNode } from 'react';

interface PageContentProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageContent = ({
  title,
  description,
  children,
}: PageContentProps) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {children}
    </div>
  );
};
