import clsx from 'clsx';
import { PageLayout, PageContent } from '@/components/PageLayout';
import { Link } from 'react-router-dom';

export const DataStructures = () => {
  const dataStructures = [
    {
      name: 'Stack',
      path: '/data-structures/stack',
      description:
        'Last-In-First-Out (LIFO) data structure with push and pop operations at one end',
      complexity: 'O(1) push/pop',
    },
    {
      name: 'Queue',
      path: '/data-structures/queue',
      description:
        'First-In-First-Out (FIFO) data structure with enqueue at rear and dequeue at front',
      complexity: 'O(1) enqueue/dequeue',
    },
    {
      name: 'Linked List',
      path: '/data-structures/linked-list',
      description:
        'Linear data structure with nodes containing data and reference to next node',
      complexity: 'O(1) insert at head',
    },
  ];

  return (
    <PageLayout>
      <PageContent
        title="Data Structures"
        description="Explore fundamental data structures, their implementations, and visualizations."
      >
        <div className="mt-8 space-y-4">
          {dataStructures.map((ds) => (
            <Link
              key={ds.path}
              to={ds.path}
              className={clsx(
                'block p-6 bg-white',
                'border border-gray-200 rounded-lg shadow',
                'hover:bg-gray-50 transition-colors'
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {ds.name}
                  </h3>
                  <p className="text-gray-600">{ds.description}</p>
                </div>
                <div className="ml-4">
                  <span
                    className={clsx(
                      'inline-block px-3 py-1',
                      'text-sm font-mono',
                      'bg-blue-100 text-blue-800 rounded'
                    )}
                  >
                    {ds.complexity}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  );
};
