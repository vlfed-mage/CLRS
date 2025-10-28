import { createDataStructureVisualizer } from './create-data-structure-visualizer';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  HASH_TABLE_CONFIG,
  generateRandomData,
  generateSteps,
  HashTableVisualization,
  HashTableInfo,
} from './hash-table';

export const HashTableVisualizer = createDataStructureVisualizer({
  dataStructureConfig: HASH_TABLE_CONFIG,
  generateData: generateRandomData,
  generateSteps,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  VisualizationComponent: HashTableVisualization,
  InfoComponent: HashTableInfo,
});
