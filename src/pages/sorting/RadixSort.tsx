import { AlgorithmPage } from '@/components/AlgorithmPage';
import { RadixSortVisualizer } from '@/components/algorithms/RadixSortVisualizer';

export const RadixSort = () => {
  return (
    <AlgorithmPage
      title="Radix Sort"
      overview={{
        description:
          'Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value. This implementation uses the LSD (Least Significant Digit) approach, processing digits from right to left. Unlike comparison-based algorithms, Radix Sort can achieve linear time complexity O(d × (n + k)) where d is the number of digits, n is the number of elements, and k is the range of digit values (0-9 for decimal). It uses Counting Sort as a subroutine for each digit position, making it stable and efficient for sorting large datasets of integers or fixed-length strings.',
        advantages: [
          'Linear time complexity O(d × (n + k)) for fixed number of digits',
          'Stable sort - preserves relative order of equal elements',
          'No comparisons needed - works by examining digit values',
          'Excellent for sorting integers, fixed-length strings, or dates',
          'Predictable performance - not affected by input distribution',
          'Can be faster than O(n log n) algorithms for appropriate data',
        ],
      }}
      visualizer={<RadixSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(d × (n + k))',
          description:
            'Where d is the number of digits, n is the number of elements, and k is the range of each digit (10 for decimal). Even on sorted data, all digits must be processed.',
        },
        {
          case: 'Average Case',
          complexity: 'O(d × (n + k))',
          description:
            'The algorithm always processes all digits for all elements. With k=10 (decimal digits), this simplifies to O(d × n) in practice.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(d × (n + k))',
          description:
            'Same as best and average case. Performance depends on the number of digits d. For very large numbers, d can grow, affecting total time.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n + k)',
          description:
            'Requires additional space for the buckets array (size k=10) and a temporary array for collecting results (size n). Not in-place like Quick Sort or Heap Sort.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Find maximum value:',
          description:
            'Find the maximum value in the array to determine the number of digits (d = floor(log10(max)) + 1). This tells us how many passes through the array we need.',
        },
        {
          number: 2,
          title: 'Process each digit position:',
          description:
            'Starting from the least significant digit (rightmost), process each digit position. Use the formula: digitValue = floor(num / 10^position) % 10 to extract the digit at each position.',
        },
        {
          number: 3,
          title: 'Create 10 buckets:',
          description:
            'For each digit position, create 10 empty buckets (one for each digit 0-9). These buckets will temporarily hold elements based on their current digit.',
        },
        {
          number: 4,
          title: 'Distribute into buckets:',
          description:
            'Scan through all elements and place each into the bucket corresponding to its digit value at the current position. For example, 345 goes into bucket 5 when processing the ones place.',
        },
        {
          number: 5,
          title: 'Collect from buckets:',
          description:
            'Collect elements from buckets in order (bucket 0 to bucket 9) and place them back into the array. This is a stable operation - elements within each bucket maintain their original relative order.',
        },
        {
          number: 6,
          title: 'Repeat for next digit:',
          description:
            'Move to the next more significant digit position (ones → tens → hundreds → ...) and repeat steps 3-5 until all digit positions have been processed. The array is now sorted.',
        },
      ]}
    />
  );
};
