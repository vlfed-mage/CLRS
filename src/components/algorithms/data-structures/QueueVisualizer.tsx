import { createDataStructureVisualizer } from './create-data-structure-visualizer';
import {
  QueueVisualization,
  QueueInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  QUEUE_CONFIG,
  generateRandomData,
  generateSteps,
} from './queue';

export const QueueVisualizer = createDataStructureVisualizer({
  dataStructureConfig: QUEUE_CONFIG,
  generateData: generateRandomData,
  generateSteps,
  codeLines: CODE_LINES,
  legendItems: LEGEND_ITEMS,
  VisualizationComponent: QueueVisualization,
  InfoComponent: QueueInfo,
  passMaxSizeToComponents: true,
});
