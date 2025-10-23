import { AlgorithmPage } from '@/components/AlgorithmPage';
import { InsertionSortVisualizer } from '@/components/algorithms';

export const InsertionSort = () => {
  return (
    <AlgorithmPage
      title="Insertion Sort"
      overview={{
        description:
          'Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:',
        advantages: [
          'Simple implementation',
          'Efficient for small data sets',
          'Adaptive: efficient for data sets that are already substantially sorted',
          'Stable: does not change the relative order of elements with equal keys',
          'In-place: only requires a constant amount O(1) of additional memory space',
        ],
      }}
      visualizer={<InsertionSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n)',
          description: 'When the array is already sorted',
        },
        {
          case: 'Average Case',
          complexity: 'O(n²)',
          description: 'When the array is randomly ordered',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n²)',
          description: 'When the array is sorted in reverse order',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(1)',
          description: 'In-place sorting algorithm',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Start from the second element',
          description: '(index 1), assuming the first element is already sorted.',
        },
        {
          number: 2,
          title: 'Compare the current element',
          description: 'with elements in the sorted portion (to its left).',
        },
        {
          number: 3,
          title: 'Shift larger elements',
          description: 'to the right to make space for the current element.',
        },
        {
          number: 4,
          title: 'Insert the current element',
          description: 'at its correct position in the sorted portion.',
        },
        {
          number: 5,
          title: 'Repeat',
          description: 'until all elements have been processed.',
        },
      ]}
    />
  );
};
