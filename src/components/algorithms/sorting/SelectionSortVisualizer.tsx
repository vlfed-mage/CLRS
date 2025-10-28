import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  SELECTION_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './selection-sort';

export const SelectionSortVisualizer = createSortingVisualizer({
  sortingConfig: SELECTION_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
});
