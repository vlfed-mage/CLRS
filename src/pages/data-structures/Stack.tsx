import { AlgorithmPage } from '@/components/AlgorithmPage';
import { StackVisualizer } from '@/components/algorithms';

export const Stack = () => {
  return (
    <AlgorithmPage
      title="Stack"
      overview={{
        description:
          'A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from the same end, called the "top" of the stack. Think of it like a stack of plates - you can only add or remove plates from the top. Stacks are fundamental in computer science, used in function call management, expression evaluation, backtracking algorithms, and browser history navigation.',
        advantages: [
          'Simple and intuitive LIFO ordering',
          'O(1) time complexity for push and pop operations',
          'Memory efficient - only stores the data',
          'Easy to implement using arrays or linked lists',
          'Natural fit for recursive algorithms and backtracking',
          'Useful for reversing data and managing nested structures',
        ],
      }}
      visualizer={<StackVisualizer />}
      complexityAnalysis={[
        {
          case: 'Push Operation',
          complexity: 'O(1)',
          description:
            'Adding an element to the top of the stack is a constant time operation. Simply increment the top pointer and place the element.',
        },
        {
          case: 'Pop Operation',
          complexity: 'O(1)',
          description:
            'Removing an element from the top is also constant time. Return the element at top and decrement the top pointer.',
        },
        {
          case: 'Peek Operation',
          complexity: 'O(1)',
          description:
            'Viewing the top element without removing it is constant time - just read the value at the top pointer.',
        },
        {
          case: 'Space Complexity',
          complexity: 'O(n)',
          description:
            'Space required is proportional to the number of elements stored in the stack. Each element occupies one slot.',
        },
      ]}
      howItWorks={[
        {
          number: 1,
          title: 'Initialize Stack:',
          description:
            'Create an empty stack with a top pointer set to -1 (indicating empty). Optionally define a maximum capacity for array-based implementation.',
        },
        {
          number: 2,
          title: 'Push Operation:',
          description:
            'To add an element: (1) Check if stack is full (optional for array-based), (2) Increment top pointer, (3) Place element at position indicated by top.',
        },
        {
          number: 3,
          title: 'Pop Operation:',
          description:
            'To remove an element: (1) Check if stack is empty (top == -1), (2) Get element at top position, (3) Decrement top pointer, (4) Return the element.',
        },
        {
          number: 4,
          title: 'Peek Operation:',
          description:
            'To view top element without removing: (1) Check if stack is empty, (2) Return element at top position without modifying top pointer.',
        },
        {
          number: 5,
          title: 'isEmpty Check:',
          description:
            'To check if stack is empty, simply verify if top == -1. This is used before pop or peek operations to avoid errors.',
        },
        {
          number: 6,
          title: 'Common Applications:',
          description:
            'Stacks are used in: function call stack (recursion), expression evaluation (postfix, infix), undo/redo functionality, bracket matching, backtracking (DFS, maze solving), and browser history.',
        },
      ]}
    />
  );
};
