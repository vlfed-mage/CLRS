import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  COUNTING_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './counting-sort';

export const CountingSortVisualizer = createSortingVisualizer({
  sortingConfig: COUNTING_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
});
