import { PageLayout, PageContent } from '@/components/PageLayout';
import { Link } from 'react-router-dom';

export const Sorting = () => {
  const sortingAlgorithms = [
    {
      name: 'Insertion Sort',
      path: '/sorting/insertion-sort',
      description:
        'A simple sorting algorithm that builds the final sorted array one item at a time',
      complexity: 'O(n²)',
    },
    {
      name: 'Merge Sort',
      path: '/sorting/merge-sort',
      description:
        'An efficient divide-and-conquer algorithm with consistent performance',
      complexity: 'O(n log n)',
    },
    {
      name: 'Bubble Sort',
      path: '/sorting/bubble-sort',
      description:
        'Simple comparison-based algorithm that repeatedly swaps adjacent elements if they are in wrong order',
      complexity: 'O(n²)',
    },
    {
      name: 'Selection Sort',
      path: '/sorting/selection-sort',
      description:
        'Finds the minimum element and places it in sorted position with minimal swaps',
      complexity: 'O(n²)',
    },
    {
      name: 'Shell Sort',
      path: '/sorting/shell-sort',
      description:
        'Optimization of insertion sort using gap sequences to allow long-distance moves',
      complexity: 'O(n^3/2)',
    },
    {
      name: 'Quick Sort',
      path: '/sorting/quick-sort',
      description:
        'Highly efficient divide-and-conquer algorithm using partitioning around a pivot element',
      complexity: 'O(n log n)',
    },
    {
      name: 'Heap Sort',
      path: '/sorting/heap-sort',
      description:
        'Binary heap-based sorting algorithm with guaranteed O(n log n) performance in all cases',
      complexity: 'O(n log n)',
    },
    {
      name: 'Counting Sort',
      path: '/sorting/counting-sort',
      description:
        'Linear-time non-comparison sorting that counts occurrences of each value',
      complexity: 'O(n + k)',
    },
  ];

  return (
    <PageLayout>
      <PageContent
        title="Sorting Algorithms"
        description="Explore different sorting algorithms, their implementations, and visualizations."
      >
        <div className="mt-8 space-y-4">
          {sortingAlgorithms.map((algorithm) => (
            <Link
              key={algorithm.path}
              to={algorithm.path}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {algorithm.name}
                  </h3>
                  <p className="text-gray-600">{algorithm.description}</p>
                </div>
                <div className="ml-4">
                  <span className="inline-block px-3 py-1 text-sm font-mono bg-blue-100 text-blue-800 rounded">
                    {algorithm.complexity}
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
