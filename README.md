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

## 📁 Project Structure

```
src/
├── components/
│   ├── algorithms/              # Algorithm visualizers by category
│   │   ├── sorting/             # Sorting algorithm visualizers
│   │   │   ├── InsertionSortVisualizer.tsx
│   │   │   ├── MergeSortVisualizer.tsx
│   │   │   ├── BubbleSortVisualizer.tsx
│   │   │   ├── SelectionSortVisualizer.tsx
│   │   │   ├── ShellSortVisualizer.tsx
│   │   │   ├── QuickSortVisualizer.tsx
│   │   │   ├── HeapSortVisualizer.tsx
│   │   │   ├── CountingSortVisualizer.tsx
│   │   │   ├── RadixSortVisualizer.tsx
│   │   │   ├── BucketSortVisualizer.tsx
│   │   │   └── index.ts
│   │   ├── data-structures/     # Data structure visualizers
│   │   │   ├── StackVisualizer.tsx
│   │   │   ├── QueueVisualizer.tsx
│   │   │   └── index.ts
│   │   └── index.ts             # Re-exports from all categories
│   ├── Visualizer/              # Shared visualizer components
│   │   ├── AlgorithmVisualizer.tsx
│   │   ├── DataStructureVisualizer.tsx
│   │   └── index.ts
│   ├── AlgorithmPage/           # Shared algorithm page template
│   │   ├── AlgorithmPage.tsx
│   │   └── index.ts
│   ├── Header/                  # Header component
│   ├── Layout/                  # Layout components
│   ├── PageLayout/              # Page layout components
│   └── Icons/                   # Icon components
├── hooks/                       # Custom React hooks
│   └── useVisualizerControls.ts # Shared visualizer controls hook
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

To add a new algorithm to the handbook:

1. **Create the visualizer component** in the appropriate category folder
   - For sorting algorithms: `src/components/algorithms/sorting/`
   - For data structures: `src/components/algorithms/data-structures/`
   - Define your step interface with required fields: `array`, `sorted`, `highlightedLine`
   - Use `useVisualizerControls` hook for playback controls
   - For sorting: Use `AlgorithmVisualizer` from `@/components/Visualizer`
   - For data structures: Use `DataStructureVisualizer` from `@/components/Visualizer`

2. **Export the visualizer** from the category's `index.ts`
   - Add export to `src/components/algorithms/[category]/index.ts`
   - Re-export is handled automatically in `src/components/algorithms/index.ts`

3. **Create the algorithm page** using `AlgorithmPage` component
   - Provide configuration: title, overview, visualizer, complexity analysis, steps

4. **Add the route** to `src/modules/navigation/routes.tsx`

5. **Update the navigation menu** in `src/modules/navigation/config.ts`

Example structure for a new sorting algorithm:

```tsx
// src/components/algorithms/sorting/QuickSortVisualizer.tsx
import { useState, useEffect } from 'react';
import { AlgorithmVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  // ... your algorithm-specific fields
  sorted: boolean;
  highlightedLine: number;
}

export const QuickSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

  const generateSteps = (arr: number[]) => {
    // Generate algorithm steps
  };

  const controls = useVisualizerControls(steps, {
    onGenerateArray: () => generateRandomArray(),
  });

  return (
    <AlgorithmVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
    />
  );
};

// src/components/algorithms/sorting/index.ts
export { QuickSortVisualizer } from './QuickSortVisualizer';
// ... other sorting exports

// src/pages/sorting/QuickSort.tsx
import { AlgorithmPage } from '@/components/AlgorithmPage';
import { QuickSortVisualizer } from '@/components/algorithms';

export const QuickSort = () => {
  return (
    <AlgorithmPage
      title="Quick Sort"
      overview={{
        description: "Your algorithm description...",
        advantages: ["Advantage 1", "Advantage 2"],
      }}
      visualizer={<QuickSortVisualizer />}
      complexityAnalysis={[
        { case: 'Best Case', complexity: 'O(n log n)', description: '...' },
      ]}
      howItWorks={[
        { number: 1, title: 'Step 1', description: '...' },
      ]}
    />
  );
};
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
  - [ ] Linked Lists
  - [ ] Hash Tables
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
