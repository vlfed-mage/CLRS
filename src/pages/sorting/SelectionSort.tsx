import { AlgorithmPage } from '@/components/AlgorithmPage';
import { SelectionSortVisualizer } from '@/components/algorithms';

export const SelectionSort = () => {
  return (
    <AlgorithmPage
      title="Selection Sort"
      overview={{
        description:
          'Selection Sort is a simple comparison-based sorting algorithm that divides the input into a sorted and unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and moves it to the end of the sorted region. The algorithm is called "selection" sort because it repeatedly selects the minimum element.',
        advantages: [
          'Simple to understand and implement',
          'Performs well on small lists',
          'Requires minimal memory (in-place sorting with O(1) space)',
          'Makes minimum number of swaps - only O(n) swaps in worst case',
          'Works well when write operations are expensive compared to reads',
        ],
      }}
      visualizer={<SelectionSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n²)',
          description:
            'Even if the array is already sorted, the algorithm must still scan all unsorted elements to find the minimum.',
        },
        {
          case: 'Average Case',
          complexity: 'O(n²)',
          description:
            'On average, the algorithm performs n²/2 comparisons as it scans through the unsorted portion for each position.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n²)',
          description:
            'The algorithm always performs the same number of comparisons regardless of input order, making all cases O(n²).',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(1)',
          description:
            'Only requires a constant amount of additional space for temporary variables (current index, minimum index).',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Start with first position:',
          description:
            'Set the current position to the first element of the unsorted portion (initially the entire array).',
        },
        {
          number: 2,
          title: 'Find minimum element:',
          description:
            'Scan through all remaining unsorted elements to find the minimum value. Keep track of the index where the minimum is located.',
        },
        {
          number: 3,
          title: 'Swap if needed:',
          description:
            'If the minimum element is not at the current position, swap it with the element at the current position.',
        },
        {
          number: 4,
          title: 'Move to next position:',
          description:
            'The current position is now sorted. Move to the next position in the array (one step to the right).',
        },
        {
          number: 5,
          title: 'Repeat until sorted:',
          description:
            'Continue this process for all positions except the last one (which will automatically be the largest element).',
        },
        {
          number: 6,
          title: 'Sorted region grows:',
          description:
            'With each iteration, the sorted region grows from left to right, and the unsorted region shrinks until the entire array is sorted.',
        },
      ]}
    />
  );
};
