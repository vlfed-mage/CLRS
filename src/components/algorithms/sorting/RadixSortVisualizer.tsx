import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  RADIX_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './radix-sort';

export const RadixSortVisualizer = createSortingVisualizer({
  sortingConfig: RADIX_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
});
