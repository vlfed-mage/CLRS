import { AlgorithmPage } from '@/components/AlgorithmPage';
import { LinkedListVisualizer } from '@/components/algorithms';

export const LinkedList = () => {
  return (
    <AlgorithmPage
      title="Linked List"
      overview={{
        description:
          'A Linked List is a linear data structure where elements are stored in nodes. Each node contains data and a reference (or link) to the next node in the sequence. Unlike arrays, linked list elements are not stored in contiguous memory locations. This structure allows for efficient insertion and deletion operations. Linked lists are fundamental in computer science, used in implementing stacks, queues, graphs, and memory management systems.',
        advantages: [
          'Dynamic size - grows and shrinks at runtime',
          'Efficient insertion/deletion at beginning: O(1)',
          'No memory waste - allocates memory as needed',
          'Easy to implement other data structures (stack, queue)',
          'No need to pre-allocate memory or resize',
          'Can be easily extended to doubly/circular variants',
        ],
      }}
      visualizer={<LinkedListVisualizer />}
      complexityAnalysis={[
        {
          case: 'Insert at Beginning',
          complexity: 'O(1)',
          description:
            'Adding a node at the start requires creating a new node, setting its next to current head, and updating head pointer. No traversal needed.',
        },
        {
          case: 'Insert at End',
          complexity: 'O(n)',
          description:
            'To add at the end, we must traverse the entire list to find the last node, then append the new node. This requires visiting all n nodes.',
        },
        {
          case: 'Delete Operation',
          complexity: 'O(n)',
          description:
            'Deletion requires finding the target node by traversing the list. In worst case, the node is at the end or not present, requiring full traversal.',
        },
        {
          case: 'Search Operation',
          complexity: 'O(n)',
          description:
            'Searching requires sequential traversal from head to find the target value. No random access like arrays - must check each node.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n)',
          description:
            'Each node requires space for data and a pointer. Total space is proportional to the number of nodes in the list.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Node Structure:',
          description:
            'Each node contains two parts: (1) Data field storing the actual value, (2) Next pointer/reference pointing to the next node. The last node points to null.',
        },
        {
          number: 2,
          title: 'Insert at Beginning:',
          description:
            'Create new node → Set new node\'s next to current head → Update head to point to new node. This makes the new node the first element in O(1) time.',
        },
        {
          number: 3,
          title: 'Insert at End:',
          description:
            'If list is empty, new node becomes head. Otherwise: (1) Traverse to last node (where next is null), (2) Set last node\'s next to new node, (3) New node\'s next is null.',
        },
        {
          number: 4,
          title: 'Delete a Node:',
          description:
            'To delete: (1) If deleting head, update head to head.next, (2) Otherwise, find node before target, (3) Update previous node\'s next to skip target node, (4) Target node becomes unreachable and is garbage collected.',
        },
        {
          number: 5,
          title: 'Traversal:',
          description:
            'Start at head, visit each node by following next pointers until reaching null. This sequential access is O(n) - unlike arrays which allow O(1) random access.',
        },
        {
          number: 6,
          title: 'Common Applications:',
          description:
            'Used in: implementing stacks and queues, browser history (back/forward), music playlists, image viewers, hash table chaining, undo functionality, and polynomial representation.',
        },
      ]}
    />
  );
};
