import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  BUBBLE_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './bubble-sort';

export const BubbleSortVisualizer = createSortingVisualizer({
  sortingConfig: BUBBLE_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
});
