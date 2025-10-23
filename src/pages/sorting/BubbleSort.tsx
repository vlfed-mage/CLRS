import { AlgorithmPage } from '@/components/AlgorithmPage';
import { BubbleSortVisualizer } from '@/components/algorithms/BubbleSortVisualizer';

export const BubbleSort = () => {
  return (
    <AlgorithmPage
      title="Bubble Sort"
      overview={{
        description:
          'Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list (beginning of the array) with each iteration.',
        advantages: [
          'Simple to understand and implement',
          'Requires no additional memory space (in-place sorting)',
          'Stable sort - maintains relative order of equal elements',
          'Can detect if the list is already sorted (best case O(n))',
          'Good for educational purposes to understand sorting concepts',
        ],
      }}
      visualizer={<BubbleSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n)',
          description:
            'When the array is already sorted. The algorithm makes one pass through the array with no swaps.',
        },
        {
          case: 'Average Case',
          complexity: 'O(n²)',
          description:
            'When the array elements are in random order. Requires multiple passes with comparisons and swaps.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n²)',
          description:
            'When the array is sorted in reverse order. Every element must be moved to its correct position.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(1)',
          description:
            'Only requires a constant amount of additional space for temporary variables.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Start from the beginning:',
          description:
            'Compare the first two adjacent elements. If the first is greater than the second, swap them.',
        },
        {
          number: 2,
          title: 'Move to the next pair:',
          description:
            'Move one position forward and compare the next two adjacent elements. Swap if needed.',
        },
        {
          number: 3,
          title: 'Complete the pass:',
          description:
            'Continue comparing and swapping adjacent pairs until you reach the end. The largest element will have "bubbled" to its correct position at the end.',
        },
        {
          number: 4,
          title: 'Repeat for remaining elements:',
          description:
            'Start another pass from the beginning, but this time stop one position earlier since the last element is already sorted.',
        },
        {
          number: 5,
          title: 'Optimize with early termination:',
          description:
            'If no swaps occur during a complete pass, the array is sorted and the algorithm can terminate early.',
        },
        {
          number: 6,
          title: 'Continue until sorted:',
          description:
            'Repeat passes until either no swaps are made or all elements have been sorted. Each pass places one more element in its final position.',
        },
      ]}
    />
  );
};
