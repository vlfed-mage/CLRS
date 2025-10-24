import { AlgorithmPage } from '@/components/AlgorithmPage';
import { QueueVisualizer } from '@/components/algorithms';

export const Queue = () => {
  return (
    <AlgorithmPage
      title="Queue"
      overview={{
        description:
          'A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue). Think of it like a line of people waiting - the first person to join the line is the first to be served. Queues are essential in computer science for managing tasks, scheduling, breadth-first search, buffering, and handling asynchronous data streams.',
        advantages: [
          'Natural FIFO ordering for fair processing',
          'O(1) time complexity for enqueue and dequeue',
          'Simple and predictable behavior',
          'Easy to implement with arrays or linked lists',
          'Essential for BFS algorithms and level-order traversal',
          'Perfect for task scheduling and buffering',
        ],
      }}
      visualizer={<QueueVisualizer />}
      complexityAnalysis={[
        {
          case: 'Enqueue Operation',
          complexity: 'O(1)',
          description:
            'Adding an element to the rear of the queue is constant time. Increment rear pointer and place the element.',
        },
        {
          case: 'Dequeue Operation',
          complexity: 'O(1)',
          description:
            'Removing an element from the front is constant time. Return element at front and increment front pointer.',
        },
        {
          case: 'Peek/Front Operation',
          complexity: 'O(1)',
          description:
            'Viewing the front element without removing it is constant time - just read the value at front pointer.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n)',
          description:
            'Space required is proportional to the number of elements in the queue. Each element occupies one slot.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Initialize Queue:',
          description:
            'Create an empty queue with front pointer set to 0 and rear pointer set to -1. This indicates an empty queue where front > rear.',
        },
        {
          number: 2,
          title: 'Enqueue Operation:',
          description:
            'To add an element: (1) Increment rear pointer, (2) Place element at position indicated by rear. The element joins the back of the line.',
        },
        {
          number: 3,
          title: 'Dequeue Operation:',
          description:
            'To remove an element: (1) Check if queue is empty (front > rear), (2) Get element at front position, (3) Increment front pointer, (4) Return the element. First in, first out.',
        },
        {
          number: 4,
          title: 'Peek/Front Operation:',
          description:
            'To view front element without removing: (1) Check if queue is empty, (2) Return element at front position without modifying pointers.',
        },
        {
          number: 5,
          title: 'isEmpty Check:',
          description:
            'To check if queue is empty, verify if front > rear. This condition occurs when all enqueued elements have been dequeued.',
        },
        {
          number: 6,
          title: 'Common Applications:',
          description:
            'Queues are used in: CPU task scheduling, printer job spooling, BFS graph traversal, handling requests in web servers, message queues, and simulating real-world queues (checkout lines, call centers).',
        },
      ]}
    />
  );
};
