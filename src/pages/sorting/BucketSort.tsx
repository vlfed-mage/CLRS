import { AlgorithmPage } from '@/components/AlgorithmPage';
import { BucketSortVisualizer } from '@/components/algorithms/BucketSortVisualizer';

export const BucketSort = () => {
  return (
    <AlgorithmPage
      title="Bucket Sort"
      overview={{
        description:
          'Bucket Sort is a distribution-based sorting algorithm that works by distributing elements into a number of buckets, sorting each bucket individually (typically using insertion sort), and then concatenating the sorted buckets. It assumes that the input is drawn from a uniform distribution and works best when the elements are uniformly distributed across the range. The algorithm divides the input range into n equal-sized buckets, distributes elements into these buckets based on their values, sorts each bucket separately, and finally combines all buckets to produce the sorted output. Bucket Sort is particularly efficient when the input is uniformly distributed and can achieve linear average-case time complexity O(n + k) where k is the number of buckets.',
        advantages: [
          'Average-case linear time complexity O(n + k) for uniformly distributed data',
          'Stable sorting algorithm when using stable sort for buckets',
          'Works well with floating-point numbers in a known range',
          'Can be parallelized - each bucket can be sorted independently',
          'Efficient for external sorting with large datasets',
          'Simple to implement and understand',
        ],
      }}
      visualizer={<BucketSortVisualizer />}
      complexityAnalysis={[
        {
          case: 'Best Case',
          complexity: 'O(n + k)',
          description:
            'When elements are uniformly distributed across buckets, each bucket has O(1) elements on average, leading to O(n) total sorting time plus O(k) bucket creation.',
        },
        {
          case: 'Average Case',
          complexity: 'O(n + k)',
          description:
            'Assumes uniform distribution of input. With n elements and k buckets, if elements are evenly distributed, sorting each bucket takes O(1) time on average.',
        },
        {
          case: 'Worst Case',
          complexity: 'O(n²)',
          description:
            'When all elements fall into a single bucket, the algorithm degrades to the performance of the bucket sorting algorithm (insertion sort), resulting in O(n²) time.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n + k)',
          description:
            'Requires O(n) space for storing elements in buckets and O(k) space for the bucket array structure.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Create empty buckets:',
          description:
            'Create an array of n empty buckets (typically n = array.length). Each bucket will hold elements within a specific range of values.',
        },
        {
          number: 2,
          title: 'Find range and normalize:',
          description:
            'Find the minimum and maximum values in the input array to determine the range. Calculate: bucketIndex = floor(((value - min) / range) * (n - 1)) to normalize each element to a bucket index.',
        },
        {
          number: 3,
          title: 'Distribute elements:',
          description:
            'Scan through the input array and place each element into its corresponding bucket based on its normalized value. Elements with similar values go into the same bucket.',
        },
        {
          number: 4,
          title: 'Sort individual buckets:',
          description:
            'Sort each non-empty bucket individually using a simple sorting algorithm like insertion sort. Since buckets are small (ideally O(1) elements), this is efficient.',
        },
        {
          number: 5,
          title: 'Concatenate buckets:',
          description:
            'Traverse the buckets in order (0 to n-1) and concatenate all sorted elements back into the original array, maintaining the sorted order.',
        },
        {
          number: 6,
          title: 'Array is sorted:',
          description:
            'After collecting all elements from all buckets in order, the array is fully sorted. The algorithm is complete.',
        },
      ]}
    />
  );
};
