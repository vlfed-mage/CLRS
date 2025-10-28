import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  QUICK_SORT_CONFIG,
  generateSteps,
  getBarColor,
  QuickSortInfo,
} from './quick-sort';

export const QuickSortVisualizer = createSortingVisualizer({
  sortingConfig: QUICK_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  InfoComponent: QuickSortInfo,
});
