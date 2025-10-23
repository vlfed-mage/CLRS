import { AlgorithmPage } from '@/components/AlgorithmPage';
import { CountingSortVisualizer } from '@/components/algorithms/CountingSortVisualizer';

export const CountingSort = () => {
  return (
    <AlgorithmPage
      title="Counting Sort"
      overview={{
        description:
          'Counting Sort is a linear-time sorting algorithm that operates by counting the number of objects with distinct key values, then using arithmetic to determine the positions of each key in the output sequence. Unlike comparison-based sorting algorithms, Counting Sort does not compare elements directly. Instead, it assumes that each input element is an integer in the range 0 to k, for some integer k. When k = O(n), Counting Sort runs in O(n) time, making it asymptotically faster than comparison-based algorithms like Quick Sort or Merge Sort, which have a lower bound of O(n log n). Counting Sort is particularly efficient when the range of input values is not significantly greater than the number of elements to be sorted.',
        advantages: [
          'Linear time complexity O(n + k) where k is the range of input',
          'Stable sorting algorithm - preserves relative order of equal elements',
          'Not comparison-based - counts occurrences instead',
          'Efficient when k = O(n), i.e., range is proportional to array size',
          'Simple to implement and understand',
          'Predictable performance with no worst-case degradation',
        ],
      }}
      visualizer={<CountingSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n + k)',
          description:
            'Where n is the number of elements and k is the range of input (max value). Best case occurs when k is proportional to n.',
        },
        {
          case: 'Average Case',
          complexity: 'O(n + k)',
          description:
            'Counting Sort always performs the same operations regardless of input distribution, maintaining linear time complexity.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n + k)',
          description:
            'Even in worst case, complexity remains O(n + k). However, if k >> n (range much larger than array size), it becomes inefficient.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(k)',
          description:
            'Requires additional space for the count array of size k+1. Not in-place, but space usage is acceptable when k = O(n).',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Find maximum value:',
          description:
            'Scan through the input array to find the maximum value. This determines the size of the count array needed (max + 1).',
        },
        {
          number: 2,
          title: 'Initialize count array:',
          description:
            'Create a count array of size (max + 1) and initialize all elements to 0. Each index represents a possible value in the input.',
        },
        {
          number: 3,
          title: 'Count occurrences:',
          description:
            'Iterate through the input array. For each element with value v, increment count[v]. This records how many times each value appears.',
        },
        {
          number: 4,
          title: 'Build output array:',
          description:
            'Iterate through the count array from index 0 to max. For each index i, place the value i into the output array count[i] times.',
        },
        {
          number: 5,
          title: 'Decrement counts:',
          description:
            'As each value is placed in the output array, decrement its count. Continue until all counts reach 0.',
        },
        {
          number: 6,
          title: 'Array is sorted:',
          description:
            'Once all values are placed, the output array contains elements in sorted order. The algorithm completes in linear time.',
        },
      ]}
    />
  );
};
