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

### Coming Soon
- Merge Sort
- Quick Sort
- Heap Sort
- Counting Sort
- Radix Sort
- Bucket Sort

## 📁 Project Structure

```
src/
├── components/
│   ├── algorithms/         # Algorithm visualizers
│   │   └── InsertionSortVisualizer.tsx
│   ├── Header/             # Header component
│   ├── Layout/             # Layout components
│   └── PageLayout/         # Page layout components
├── config/                 # Application configuration
├── modules/
│   └── navigation/         # Navigation module
├── pages/
│   ├── sorting/            # Sorting algorithms chapter
│   │   ├── Sorting.tsx     # Chapter overview
│   │   └── InsertionSort.tsx
│   └── Home.tsx           # Landing page
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
- **New Array** - Generate a random array to sort
- **Speed Slider** - Adjust animation speed (100ms - 2000ms per step)

### Understanding the Colors

- 🔵 **Blue** - Current element being processed
- 🟡 **Yellow** - Element being compared
- 🟢 **Green** - Elements in their sorted position
- ⚪ **Gray** - Unsorted elements

## 🛠️ Adding New Algorithms

To add a new algorithm to the handbook:

1. **Create the visualizer component** in `src/components/algorithms/`
2. **Create the algorithm page** in the appropriate chapter folder (e.g., `src/pages/sorting/`)
3. **Add the route** to `src/modules/navigation/routes.tsx`
4. **Update the navigation menu** in `src/modules/navigation/config.ts`

Example structure for a new algorithm:

```tsx
// src/pages/sorting/MergeSort.tsx
import { PageLayout, PageContent } from '../../components/PageLayout';
import { MergeSortVisualizer } from '../../components/algorithms';

export const MergeSort = () => {
  return (
    <PageLayout>
      <PageContent title="Merge Sort">
        {/* Overview, visualization, code, complexity analysis */}
      </PageContent>
    </PageLayout>
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

## 🎯 Learning Resources

- [MIT OpenCourseWare - Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)
- [Algorithm Visualizations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

## 🚀 Roadmap

### Planned Chapters

- [ ] **Sorting Algorithms** (In Progress)
  - [x] Insertion Sort
  - [ ] Merge Sort
  - [ ] Quick Sort
  - [ ] Heap Sort
  - [ ] Counting Sort
  - [ ] Radix Sort

- [ ] **Data Structures**
  - [ ] Stacks and Queues
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