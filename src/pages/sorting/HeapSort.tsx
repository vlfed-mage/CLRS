import { AlgorithmPage } from '@/components/AlgorithmPage';
import { HeapSortVisualizer } from '@/components/algorithms/HeapSortVisualizer';

export const HeapSort = () => {
  return (
    <AlgorithmPage
      title="Heap Sort"
      overview={{
        description:
          'Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It works by first building a max heap from the input data, then repeatedly extracting the maximum element from the heap and rebuilding the heap with the remaining elements. Heap Sort was invented by J. W. J. Williams in 1964. It combines the better attributes of merge sort (O(n log n) worst-case) and insertion sort (in-place). Unlike Quick Sort, Heap Sort guarantees O(n log n) time complexity in the worst case, making it reliable for time-critical applications.',
        advantages: [
          'Guaranteed O(n log n) time complexity in all cases (worst, average, best)',
          'In-place sorting requiring only O(1) auxiliary space',
          'No worst-case scenario degradation unlike Quick Sort',
          'Does not require recursion stack space (can be implemented iteratively)',
          'Useful for implementing priority queues',
          'Good cache performance for large datasets',
        ],
      }}
      visualizer={<HeapSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n log n)',
          description:
            'Building the heap takes O(n) time, and extracting n elements with heapify takes O(n log n), resulting in O(n log n) total.',
        },
        {
          case: 'Average Case',
          complexity: 'O(n log n)',
          description:
            'The algorithm always performs the same number of comparisons and swaps regardless of input order.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n log n)',
          description:
            'Unlike Quick Sort, Heap Sort guarantees O(n log n) performance even in worst case, making it reliable for real-time systems.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(1)',
          description:
            'Heap Sort is an in-place algorithm. It only requires a constant amount of additional space for variables.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Build max heap:',
          description:
            'Start from the last non-leaf node (at index n/2 - 1) and work backwards to the root, calling heapify on each node. This creates a max heap where parent nodes are greater than their children.',
        },
        {
          number: 2,
          title: 'Heapify operation:',
          description:
            'For a node at index i, compare it with its left child (2i + 1) and right child (2i + 2). Find the largest among the three. If a child is larger, swap and recursively heapify the affected subtree.',
        },
        {
          number: 3,
          title: 'Extract maximum:',
          description:
            'The root of the max heap contains the largest element. Swap it with the last element in the heap, reducing the heap size by 1. The largest element is now in its final sorted position.',
        },
        {
          number: 4,
          title: 'Restore heap property:',
          description:
            'After swapping, the heap property is violated at the root. Call heapify on the root to restore the max heap property for the remaining elements.',
        },
        {
          number: 5,
          title: 'Repeat extraction:',
          description:
            'Repeat steps 3-4 for all remaining elements. Each iteration places the next largest element in its final position, working from right to left.',
        },
        {
          number: 6,
          title: 'Array is sorted:',
          description:
            'When the heap size reaches 1, all elements are in their final positions and the array is sorted in ascending order.',
        },
      ]}
    />
  );
};
