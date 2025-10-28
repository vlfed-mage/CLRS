import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  SHELL_SORT_CONFIG,
  generateSteps,
  getBarColor,
  ShellSortInfo,
} from './shell-sort';

export const ShellSortVisualizer = createSortingVisualizer({
  sortingConfig: SHELL_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  InfoComponent: ShellSortInfo,
});
