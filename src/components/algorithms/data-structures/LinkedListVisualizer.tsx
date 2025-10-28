import { createDataStructureVisualizer } from './create-data-structure-visualizer';
import {
  LinkedListVisualization,
  LinkedListInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  LINKED_LIST_CONFIG,
  generateRandomData,
  generateSteps,
} from './linked-list';

export const LinkedListVisualizer = createDataStructureVisualizer({
  dataStructureConfig: LINKED_LIST_CONFIG,
  generateData: generateRandomData,
  generateSteps,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  VisualizationComponent: LinkedListVisualization,
  InfoComponent: LinkedListInfo,
});
