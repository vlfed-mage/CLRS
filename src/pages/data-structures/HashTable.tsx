import { AlgorithmPage } from '@/components/AlgorithmPage';
import { HashTableVisualizer } from '@/components/algorithms';

export const HashTable = () => {
  return (
    <AlgorithmPage
      title="Hash Table"
      overview={{
        description:
          'A Hash Table is a data structure that implements an associative array, mapping keys to values using a hash function. It provides fast average-case O(1) lookup, insertion, and deletion operations. The hash function computes an index into an array of buckets from which the desired value can be found. Hash tables are fundamental in computer science, used in database indexing, caching, symbol tables in compilers, and implementing sets and dictionaries in programming languages.',
        advantages: [
          'Average O(1) time complexity for insert, search, and delete operations',
          'Efficient for large datasets with frequent lookups',
          'Flexible key types - can hash any comparable data',
          'Space-efficient when load factor is managed properly',
          'Natural implementation for dictionaries and sets',
          'Excellent for caching and memoization strategies',
        ],
      }}
      visualizer={<HashTableVisualizer />}
      complexityAnalysis={[
        {
          case: 'Insert Operation (Average)',
          complexity: 'O(1)',
          description:
            'Computing the hash and adding to the bucket is constant time on average. With chaining, insertion at the head of the linked list is O(1).',
        },
        {
          case: 'Insert Operation (Worst)',
          complexity: 'O(n)',
          description:
            'In the worst case (all keys hash to same bucket), insertion may require traversing the entire chain, resulting in O(n) time.',
        },
        {
          case: 'Search Operation (Average)',
          complexity: 'O(1)',
          description:
            'Computing the hash and searching within the bucket is constant time on average when the load factor is low and distribution is uniform.',
        },
        {
          case: 'Search Operation (Worst)',
          complexity: 'O(n)',
          description:
            'In the worst case (poor hash function or high load factor), all keys may hash to the same bucket, requiring O(n) search time.',
        },
        {
          case: 'Delete Operation (Average)',
          complexity: 'O(1)',
          description:
            'Finding and removing an element from a bucket is constant time on average with proper hash distribution and low load factor.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n)',
          description:
            'Space required is proportional to the number of key-value pairs stored, plus the fixed-size array of buckets.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Hash Function:',
          description:
            'A hash function takes a key and computes an integer index within the table size range. Good hash functions distribute keys uniformly across buckets. Common example: index = key % table_size (modulo division method).',
        },
        {
          number: 2,
          title: 'Collision Resolution - Chaining:',
          description:
            'When multiple keys hash to the same index (collision), chaining stores them in a linked list at that bucket. Each bucket becomes a chain of entries with the same hash value.',
        },
        {
          number: 3,
          title: 'Insert Operation:',
          description:
            'To insert a key-value pair: (1) Compute hash index using hash function, (2) Navigate to the bucket at that index, (3) Add the new entry to the chain (typically at the head for O(1) insertion).',
        },
        {
          number: 4,
          title: 'Search Operation:',
          description:
            'To find a value by key: (1) Compute hash index, (2) Navigate to the bucket, (3) Traverse the chain comparing keys until match is found or end of chain is reached.',
        },
        {
          number: 5,
          title: 'Delete Operation:',
          description:
            'To remove a key-value pair: (1) Compute hash index, (2) Navigate to the bucket, (3) Traverse the chain to find the entry, (4) Remove it from the chain by adjusting pointers.',
        },
        {
          number: 6,
          title: 'Load Factor & Rehashing:',
          description:
            'Load factor = n / table_size (number of entries divided by table size). When load factor exceeds a threshold (typically 0.75), the table should be resized and all entries rehashed to maintain O(1) performance.',
        },
        {
          number: 7,
          title: 'Common Applications:',
          description:
            'Hash tables are used in: database indexing, compiler symbol tables, caching systems (LRU cache), implementing sets and maps, counting frequencies, detecting duplicates, and cryptographic applications.',
        },
      ]}
    />
  );
};
