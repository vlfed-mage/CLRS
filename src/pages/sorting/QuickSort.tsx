import { AlgorithmPage } from '@/components/AlgorithmPage';
import { QuickSortVisualizer } from '@/components/algorithms';

export const QuickSort = () => {
  return (
    <AlgorithmPage
      title="Quick Sort"
      overview={{
        description:
          'Quick Sort is a highly efficient divide-and-conquer sorting algorithm developed by Tony Hoare in 1959. It works by selecting a "pivot" element and partitioning the array around it, placing smaller elements to the left and larger elements to the right. The algorithm then recursively applies the same process to the sub-arrays. Despite having a worst-case time complexity of O(n²), Quick Sort is often faster in practice than other O(n log n) algorithms due to its excellent cache performance and low overhead. It\'s the default sorting algorithm in many programming language libraries.',
        advantages: [
          'Very fast in practice with average O(n log n) performance',
          'In-place sorting requiring only O(log n) extra space for recursion',
          'Excellent cache locality due to sequential access patterns',
          'Can be easily parallelized for multi-core processors',
          'Adaptive - performs well on partially sorted data',
          'Widely used as the default sort in many standard libraries',
        ],
      }}
      visualizer={<QuickSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n log n)',
          description:
            'When the pivot always divides the array into two equal halves, leading to balanced recursion.',
        },
        {
          case: 'Average Case',
          complexity: 'O(n log n)',
          description:
            'With random pivots, the algorithm achieves O(n log n) on average, making it very efficient for most real-world data.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n²)',
          description:
            'When the pivot is always the smallest or largest element (e.g., already sorted array with first/last pivot). Can be avoided with random pivot selection.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(log n)',
          description:
            'Requires O(log n) stack space for recursive calls in the average case. Worst case can require O(n) stack space.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Choose a pivot:',
          description:
            'Select a pivot element from the array. This implementation uses the last element as the pivot (other strategies include random selection or median-of-three).',
        },
        {
          number: 2,
          title: 'Partition the array:',
          description:
            'Rearrange the array so that all elements smaller than the pivot come before it, and all elements greater come after it. The pivot is now in its final sorted position.',
        },
        {
          number: 3,
          title: 'Track partition index (i):',
          description:
            'Maintain index i that marks the boundary between elements smaller than the pivot. Start with i = low - 1.',
        },
        {
          number: 4,
          title: 'Scan and swap (j):',
          description:
            'For each element j from low to high-1, if arr[j] < pivot, increment i and swap arr[i] with arr[j]. This moves smaller elements to the left partition.',
        },
        {
          number: 5,
          title: 'Place pivot in position:',
          description:
            'After scanning, swap the pivot (at high) with arr[i+1]. The pivot is now at index i+1, with all smaller elements to its left and larger elements to its right.',
        },
        {
          number: 6,
          title: 'Recursively sort sub-arrays:',
          description:
            'Apply Quick Sort to the left sub-array (low to pivotIndex-1) and right sub-array (pivotIndex+1 to high). Continue until sub-arrays have size 0 or 1.',
        },
      ]}
    />
  );
};
