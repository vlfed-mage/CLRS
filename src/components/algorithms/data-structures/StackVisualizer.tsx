import { createDataStructureVisualizer } from './create-data-structure-visualizer';
import {
  StackVisualization,
  StackInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  STACK_CONFIG,
  generateRandomData,
  generateSteps,
} from './stack';

export const StackVisualizer = createDataStructureVisualizer({
  dataStructureConfig: STACK_CONFIG,
  generateData: generateRandomData,
  generateSteps,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  VisualizationComponent: StackVisualization,
  InfoComponent: StackInfo,
  passMaxSizeToComponents: true,
});
