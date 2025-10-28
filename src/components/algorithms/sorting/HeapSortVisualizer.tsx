import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  HEAP_SORT_CONFIG,
  generateSteps,
  getBarColor,
  HeapSortInfo,
} from './heap-sort';

export const HeapSortVisualizer = createSortingVisualizer({
  sortingConfig: HEAP_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  InfoComponent: HeapSortInfo,
});
