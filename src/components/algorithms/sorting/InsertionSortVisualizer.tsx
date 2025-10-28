import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  INSERTION_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './insertion-sort';

export const InsertionSortVisualizer = createSortingVisualizer({
  sortingConfig: INSERTION_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
});
