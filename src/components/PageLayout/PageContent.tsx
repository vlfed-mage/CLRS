import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';

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
  const [isSticky, setIsSticky] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px' }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed left-8 top-24 z-30 transition-opacity
        duration-300 ${isSticky ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: isSticky ? 'auto' : 'none' }}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <div ref={titleRef} className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {children}
    </div>
  );
};
