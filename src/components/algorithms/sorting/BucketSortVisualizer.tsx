import { createSortingVisualizer } from './create-sorting-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  BUCKET_SORT_CONFIG,
  generateSteps,
  getBarColor,
  BucketSortInfo,
} from './bucket-sort';

export const BucketSortVisualizer = createSortingVisualizer({
  sortingConfig: BUCKET_SORT_CONFIG,
  generateSteps,
  getBarColor,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  InfoComponent: BucketSortInfo,
});
