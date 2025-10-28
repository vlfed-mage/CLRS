import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  MERGE_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './merge-sort';

export const MergeSortVisualizer = createSortingVisualizer({
  sortingConfig: MERGE_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
});
