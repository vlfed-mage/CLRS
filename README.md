# Introduction to Algorithms - Interactive Handbook

An interactive handbook to help you master algorithms from **"Introduction to Algorithms"** (CLRS) by Cormen, Leiserson, Rivest, and Stein. This web application provides visual demonstrations, step-by-step explanations, and code implementations to complement your study of the classic textbook.

## ✨ Features

- 📖 **CLRS Companion** - Follows the structure of "Introduction to Algorithms" textbook
- 🎨 **Interactive Visualizations** - See algorithms come to life with step-by-step animations
- 📊 **Complexity Analysis** - Time and space complexity for each algorithm
- 💻 **Code Examples** - TypeScript implementations ready to study and run
- 🎮 **Playback Controls** - Play, pause, step through, and control animation speed
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🏗️ **Chapter-based Organization** - Mirrors CLRS book structure for easy navigation

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint-fix` | Fix ESLint issues automatically |
| `npm run type-check` | Run TypeScript type checking |
| `npm run prettier` | Format code with Prettier |

## 📚 Available Chapters

### Currently Implemented

#### Sorting Algorithms
- **Insertion Sort** - Interactive visualization with complexity analysis
  - Best Case: O(n)
  - Average/Worst Case: O(n²)
  - Space: O(1)

- **Merge Sort** - Divide-and-conquer visualization with merge tracking
  - Best/Average/Worst Case: O(n log n)
  - Space: O(n)

- **Bubble Sort** - Simple comparison-based sorting with adjacent swaps
  - Best Case: O(n)
  - Average/Worst Case: O(n²)
  - Space: O(1)

- **Selection Sort** - Finds minimum element and places it in sorted position
  - Best/Average/Worst Case: O(n²)
  - Space: O(1)

- **Shell Sort** - Optimization of insertion sort using gap sequences
  - Best Case: O(n log n)
  - Average Case: O(n^(3/2))
  - Worst Case: O(n²)
  - Space: O(1)

- **Quick Sort** - Efficient divide-and-conquer with partitioning
  - Best/Average Case: O(n log n)
  - Worst Case: O(n²)
  - Space: O(log n)

- **Heap Sort** - Binary heap-based sorting with guaranteed performance
  - Best/Average/Worst Case: O(n log n)
  - Space: O(1)

- **Counting Sort** - Linear-time non-comparison sorting using counting
  - Best/Average/Worst Case: O(n + k) where k is range of input
  - Space: O(k)

- **Radix Sort** - Non-comparative sorting by processing digits
  - Best/Average/Worst Case: O(d × (n + k)) where d is number of digits
  - Space: O(n + k)

- **Bucket Sort** - Distribution-based sorting using buckets
  - Best/Average Case: O(n + k)
  - Worst Case: O(n²)
  - Space: O(n + k)

#### Data Structures
- **Stack** - Last-In-First-Out (LIFO) data structure
  - Push/Pop/Peek: O(1)
  - Space: O(n)

- **Queue** - First-In-First-Out (FIFO) data structure
  - Enqueue/Dequeue/Peek: O(1)
  - Space: O(n)

- **Linked List** - Linear structure with nodes containing data and next pointer
  - Insert at Beginning: O(1)
  - Insert at End: O(n)
  - Delete/Search: O(n)
  - Space: O(n)

- **Hash Table** - Key-value data structure using separate chaining for collision resolution
  - Insert/Search/Delete (Average): O(1)
  - Insert/Search/Delete (Worst): O(n)
  - Space: O(n)

## 📁 Project Structure

```
src/
├── components/
│   ├── algorithms/              # Algorithm visualizers by category
│   │   ├── sorting/             # Sorting algorithm visualizers
│   │   │   ├── types.ts         # BaseSortStep, SortingConfig, DEFAULT_SORTING_CONFIG
│   │   │   ├── create-sorting-visualizer.tsx  # Factory for sorting visualizers
│   │   │   ├── bubble-sort/
│   │   │   │   ├── helpers.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   ├── insertion-sort/  # Same structure as bubble-sort
│   │   │   ├── selection-sort/  # Same structure as bubble-sort
│   │   │   ├── shell-sort/      # With ShellSortInfo.tsx
│   │   │   ├── quick-sort/      # With QuickSortInfo.tsx
│   │   │   ├── heap-sort/       # With HeapSortInfo.tsx
│   │   │   ├── merge-sort/
│   │   │   ├── counting-sort/
│   │   │   ├── radix-sort/
│   │   │   ├── bucket-sort/     # With BucketSortInfo.tsx
│   │   │   ├── BubbleSortVisualizer.tsx
│   │   │   ├── InsertionSortVisualizer.tsx
│   │   │   ├── SelectionSortVisualizer.tsx
│   │   │   ├── ShellSortVisualizer.tsx
│   │   │   ├── QuickSortVisualizer.tsx
│   │   │   ├── HeapSortVisualizer.tsx
│   │   │   ├── MergeSortVisualizer.tsx
│   │   │   ├── CountingSortVisualizer.tsx
│   │   │   ├── RadixSortVisualizer.tsx
│   │   │   ├── BucketSortVisualizer.tsx
│   │   │   └── index.ts
│   │   ├── data-structures/     # Data structure visualizers
│   │   │   ├── types.ts         # Shared BaseStep and DataStructureConfig
│   │   │   ├── create-data-structure-visualizer.tsx  # Factory for data structures
│   │   │   ├── stack/
│   │   │   │   ├── helpers.ts
│   │   │   │   ├── constants.ts
│   │   │   │   ├── StackVisualization.tsx
│   │   │   │   ├── StackInfo.tsx
│   │   │   │   └── index.ts
│   │   │   ├── queue/           # Same structure as stack
│   │   │   ├── linked-list/     # Same structure as stack
│   │   │   ├── hash-table/      # Same structure as stack
│   │   │   ├── StackVisualizer.tsx
│   │   │   ├── QueueVisualizer.tsx
│   │   │   ├── LinkedListVisualizer.tsx
│   │   │   ├── HashTableVisualizer.tsx
│   │   │   └── index.ts
│   │   └── index.ts             # Re-exports from all categories
│   ├── Visualizer/              # Shared visualizer components
│   │   ├── SortingVisualizer.tsx         # For sorting algorithms
│   │   ├── DataStructureVisualizer.tsx   # For data structures
│   │   ├── VisualizerControls.tsx        # Playback controls component
│   │   ├── types.ts
│   │   └── index.ts
│   ├── AlgorithmPage/           # Shared algorithm page template
│   │   ├── AlgorithmPage.tsx
│   │   └── index.ts
│   ├── Header/                  # Header component
│   ├── Layout/                  # Layout components
│   ├── PageLayout/              # Page layout components
│   └── Icons/                   # Icon components
├── hooks/                       # Custom React hooks
│   ├── useVisualizerControls.ts       # Shared visualizer controls hook
│   ├── useSortingInitializer.ts       # Sorting initialization hook
│   └── useDataStructureInitializer.ts # Data structure initialization hook
├── config/                      # Application configuration
├── modules/
│   └── navigation/              # Navigation module
│       ├── components/          # Navigation components
│       ├── hooks/               # Navigation hooks
│       ├── config.ts            # Navigation configuration
│       ├── routes.tsx           # Route definitions
│       ├── types.ts             # Navigation types
│       └── Navigation.tsx       # Main navigation component
├── pages/
│   ├── sorting/                 # Sorting algorithms chapter
│   │   ├── Sorting.tsx          # Chapter overview
│   │   ├── InsertionSort.tsx    # Insertion sort page
│   │   ├── MergeSort.tsx        # Merge sort page
│   │   ├── BubbleSort.tsx       # Bubble sort page
│   │   ├── SelectionSort.tsx    # Selection sort page
│   │   ├── ShellSort.tsx        # Shell sort page
│   │   ├── QuickSort.tsx        # Quick sort page
│   │   ├── HeapSort.tsx         # Heap sort page
│   │   ├── CountingSort.tsx     # Counting sort page
│   │   ├── RadixSort.tsx        # Radix sort page
│   │   ├── BucketSort.tsx       # Bucket sort page
│   │   └── index.ts             # Sorting exports
│   ├── data-structures/         # Data structures chapter
│   │   ├── DataStructures.tsx   # Chapter overview
│   │   ├── Stack.tsx            # Stack page
│   │   ├── Queue.tsx            # Queue page
│   │   ├── LinkedList.tsx       # Linked list page
│   │   ├── HashTable.tsx        # Hash table page
│   │   └── index.ts             # Data structures exports
│   └── Home.tsx                 # Landing page
├── App.tsx
├── main.tsx
├── router.tsx
└── index.css
```

## 🎓 How to Use This Handbook

This handbook is designed to complement your study of the CLRS textbook:

1. **Read the CLRS chapter** - Start with the textbook to understand the theory
2. **Open the corresponding chapter** - Navigate to the same topic in this handbook
3. **Watch the visualization** - See the algorithm in action with step-by-step animation
4. **Study the code** - Review the TypeScript implementation
5. **Experiment** - Generate new arrays, adjust speed, and step through manually
6. **Practice** - Try implementing the algorithm yourself based on what you learned

### Using the Visualizers

Each algorithm page includes an interactive visualizer with these controls:

- **Play/Pause** - Start or stop the automatic animation
- **Previous/Next** - Step backward or forward through each operation
- **Reset** - Return to the first step
- **New Array/Data** - Generate new random data for the algorithm
- **Speed Slider** - Adjust animation speed (100ms - 2000ms per step)

Each visualizer includes:
- **Color-coded visualization** - Visual representation with color coding to highlight different states
- **Code panel** - Real TypeScript code with synchronized highlighting
- **Legend** - Explanation of what each color represents

**Note**: Color meanings and visual representations vary by algorithm. Always refer to the legend on each algorithm's page for specific details.

## 🛠️ Adding New Algorithms

### Adding a Sorting Algorithm

All sorting algorithms (BubbleSort, InsertionSort, SelectionSort, ShellSort, MergeSort, QuickSort, HeapSort, CountingSort, RadixSort, BucketSort) follow a consistent modular folder structure with separation of concerns.

Steps to add a new sorting algorithm:

1. **Create folder**: `src/components/algorithms/sorting/[algorithm-name]/`

2. **Create `helpers.ts`** with algorithm logic:

```tsx
import type { BaseSortStep } from '../types';

export interface YourSortStep extends BaseSortStep {
  // Algorithm-specific fields
  comparingIndices: number[];
  swapped: boolean;
}

export const getBarColor = (index: number, step: YourSortStep): string => {
  if (step.sorted) {
    return 'bg-green-400';
  }
  if (step.comparingIndices.includes(index)) {
    if (step.swapped) {
      return 'bg-red-400';
    }
    return 'bg-yellow-400';
  }
  return 'bg-gray-300';
};

export const generateSteps = (arr: number[]): YourSortStep[] => {
  const newSteps: YourSortStep[] = [];
  const array = [...arr];

  // Initial state
  newSteps.push({
    array: [...array],
    sorted: false,
    highlightedLine: 0,
    comparingIndices: [],
    swapped: false,
  });

  // Algorithm implementation with step tracking
  // ...

  // Final sorted state
  newSteps.push({
    array: [...array],
    sorted: true,
    highlightedLine: finalLine,
    comparingIndices: [],
    swapped: false,
  });

  return newSteps;
};
```

3. **Create `constants.ts`**:

```tsx
import type { SortingConfig } from '../types';

export const YOUR_SORT_CONFIG: SortingConfig = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};

export const CODE_LINES: string[] = [
  'const yourSort = (arr: number[]): number[] => {',
  '  // implementation',
  '  return arr;',
  '};',
];

export const LEGEND_ITEMS = [
  { color: 'bg-yellow-400', label: 'Comparing' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];
```

4. **(Optional) Create Info component** if your algorithm needs to display extra information:

```tsx
import type { YourSortStep } from './helpers';

interface YourSortInfoProps {
  step: YourSortStep;
}

export const YourSortInfo = ({ step }: YourSortInfoProps) => {
  if (!step.someCondition) {
    return null;
  }

  return (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Label:</strong> {step.someValue}
      </p>
      <p className="text-xs text-blue-600 mt-1">
        Explanation text
      </p>
    </div>
  );
};
```

Examples: **ShellSort** (gap), **QuickSort** (range/pivot), **HeapSort** (heap size/phase)

5. **Create `index.ts`** for barrel exports:

```tsx
export { CODE_LINES, LEGEND_ITEMS, YOUR_SORT_CONFIG } from './constants';
export { generateSteps, getBarColor } from './helpers';
export type { YourSortStep } from './helpers';
// If you created an Info component:
export { YourSortInfo } from './YourSortInfo';
```

6. **Create visualizer**: `YourSortVisualizer.tsx` using the factory pattern:

```tsx
import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  YOUR_SORT_CONFIG,
  generateSteps,
  getBarColor,
  YourSortInfo, // Only if you created an Info component
} from './your-sort';

export const YourSortVisualizer = createSortingVisualizer({
  sortingConfig: YOUR_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  InfoComponent: YourSortInfo, // Optional - only if you have one
});
```

**Note**: The `createSortingVisualizer` factory function handles all the boilerplate:
- Configuration merging with defaults
- Hook initialization (`useSortingInitializer`, `useVisualizerControls`)
- Component structure and rendering
- Type safety with generics

7. **Export visualizer** from `src/components/algorithms/sorting/index.ts`

8. **Create page** using `AlgorithmPage` template

9. **Add route** to `src/modules/navigation/routes.tsx`

10. **Update navigation** in `src/modules/navigation/config.ts`

**Key Points**:
- Use `createSortingVisualizer` factory for consistent visualizer creation
- Factory eliminates ~40 lines of boilerplate per visualizer
- Step interface extends `BaseSortStep` (array, sorted, highlightedLine)
- `helpers.ts` contains all algorithm logic: step generation and color logic
- Optional Info component for complex algorithms that need extra information display
- Separate concerns: helpers, constants, optional info, visualizer
- Factory provides: type safety, hook management, configuration merging

### Adding a Data Structure

Data structures follow a modular folder structure with separation of concerns. Each data structure has its own folder containing helpers, constants, visualization, and info components.

Steps to add a new data structure:

1. **Create folder**: `src/components/algorithms/data-structures/[structure-name]/`

2. **Create `helpers.ts`** with configuration injection pattern:

```tsx
import type { BaseStep, DataStructureConfig } from '../types';
import { DEFAULT_CONFIG } from '../types';

export interface YourStructureStep extends BaseStep {
  // Your structure-specific fields
  array: number[];
  operation: 'operation1' | 'operation2' | 'idle';
}

export const generateRandomData = (
  config: DataStructureConfig = {}
): number[] => {
  const { initialSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  // Generate initial data using config values
};

export const generateSteps = (
  initialData: number[],
  config: DataStructureConfig = {}
): YourStructureStep[] => {
  const { maxSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  // Generate steps using config values
};
```

3. **Create `constants.ts`**:

```tsx
import type { LegendItem } from '@/components/Visualizer/Legend';
import type { DataStructureConfig } from '../types';

export const YOUR_STRUCTURE_CONFIG: DataStructureConfig = {
  maxSize: 10,
  initialSize: 5,
  minValue: 1,
  maxValue: 99,
};

export const CODE_LINES: string[] = [
  'operation1() {',
  '  // implementation',
  '}',
];

export const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Current' },
];
```

4. **Create visualization component**: `YourStructureVisualization.tsx`

5. **Create info component**: `YourStructureInfo.tsx`

6. **Create `index.ts`** for barrel exports

7. **Create visualizer**: `YourStructureVisualizer.tsx` using the factory pattern:

```tsx
import { createDataStructureVisualizer } from './create-data-structure-visualizer';
import {
  YourStructureVisualization,
  YourStructureInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  YOUR_STRUCTURE_CONFIG,
  generateRandomData,
  generateSteps,
} from './your-structure';

export const YourStructureVisualizer = createDataStructureVisualizer({
  dataStructureConfig: YOUR_STRUCTURE_CONFIG,
  generateData: generateRandomData,
  generateSteps,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  VisualizationComponent: YourStructureVisualization,
  InfoComponent: YourStructureInfo,
  passMaxSizeToComponents: true, // Optional - only if components need maxSize
});
```

**Note**: The `createDataStructureVisualizer` factory function handles all the boilerplate:
- Configuration merging with defaults
- Hook initialization (`useDataStructureInitializer`, `useVisualizerControls`)
- Props construction (including optional `maxSize`)
- Component structure and rendering
- Type safety with generics

8. **Export from data-structures index** and complete remaining steps (page, route, navigation) same as sorting algorithms.

```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [React Router](https://reactrouter.com/) - Routing

## 📚 CLRS Reference

This handbook is designed as a companion to:

**"Introduction to Algorithms, Fourth Edition"**
by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein

- [MIT Press Book Page](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/)

### ⚠️ Disclaimer

This project is an independent educational tool created for learning purposes. It is **not affiliated with, endorsed by, or sponsored by** the authors (Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein) or the publisher (MIT Press) of "Introduction to Algorithms." This is a community-driven learning resource intended to complement the textbook through interactive visualizations.

## 💡 Inspiration

This project was inspired by excellent algorithm visualization resources:

- **[VisuAlgo](https://visualgo.net/)** - Visualising data structures and algorithms through animation
- **[Toptal Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)** - Interactive sorting algorithm visualizations
- **CLRS Textbook** - The definitive guide to algorithms that inspired the structure and content

Special thanks to these resources for demonstrating the power of visual learning in understanding algorithms.

## 🎯 Learning Resources

- [MIT OpenCourseWare - Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)
- [Algorithm Visualizations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [VisuAlgo](https://visualgo.net/)
- [Toptal Sorting Algorithms](https://www.toptal.com/developers/sorting-algorithms)

## 🚀 Roadmap

### Planned Chapters

- [x] **Sorting Algorithms** (Completed)
  - [x] Insertion Sort
  - [x] Merge Sort
  - [x] Bubble Sort
  - [x] Selection Sort
  - [x] Shell Sort
  - [x] Quick Sort
  - [x] Heap Sort
  - [x] Counting Sort
  - [x] Radix Sort
  - [x] Bucket Sort

- [ ] **Data Structures** (In Progress)
  - [x] Stacks
  - [x] Queues
  - [x] Linked Lists
  - [x] Hash Tables
  - [ ] Binary Search Trees
  - [ ] Red-Black Trees

- [ ] **Advanced Design and Analysis**
  - [ ] Dynamic Programming
  - [ ] Greedy Algorithms
  - [ ] Divide and Conquer

- [ ] **Graph Algorithms**
  - [ ] BFS and DFS
  - [ ] Minimum Spanning Trees
  - [ ] Shortest Paths

## 🤝 Contributing

Want to add more algorithms or improve visualizations? Contributions are welcome! This handbook is built to help us learn, so clear explanations and interactive demos are the priority.

## 📝 License

MIT
