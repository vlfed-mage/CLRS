import { AlgorithmPage } from '@/components/AlgorithmPage';
import { MergeSortVisualizer } from '@/components/algorithms';

export const MergeSort = () => {
  return (
    <AlgorithmPage
      title="Merge Sort"
      overview={{
        description:
          'Merge sort is an efficient, stable sorting algorithm that uses the divide-and-conquer strategy. It divides the input array into two halves, recursively sorts them, and then merges the two sorted halves. The key advantage of merge sort is its consistent performance across all input cases.',
        advantages: [
          'Efficient for large datasets',
          'Stable: maintains the relative order of equal elements',
          'Predictable performance: O(n log n) in all cases',
          'Divide-and-conquer approach makes it easy to understand',
          'Can be easily parallelized for multi-threaded processing',
        ],
      }}
      visualizer={<MergeSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n log n)',
          description: 'Consistent performance regardless of input',
        },
        {
          case: 'Average Case',
          complexity: 'O(n log n)',
          description: 'Maintains logarithmic depth with linear merges',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n log n)',
          description: 'Always divides and merges in the same pattern',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n)',
          description: 'Requires additional space for temporary arrays',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Divide',
          description:
            'the unsorted array into two halves by finding the middle point.',
        },
        {
          number: 2,
          title: 'Recursively sort',
          description: 'each half by applying merge sort to them.',
        },
        {
          number: 3,
          title: 'Merge',
          description:
            'the two sorted halves back together by comparing elements.',
        },
        {
          number: 4,
          title: 'Compare elements',
          description:
            'from both halves and place the smaller one in the result.',
        },
        {
          number: 5,
          title: 'Continue merging',
          description: 'until all elements from both halves are processed.',
        },
      ]}
    />
  );
};
