import { DataStructureVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useDataStructureInitializer } from '@/hooks/useDataStructureInitializer';
import { DEFAULT_CONFIG } from './types';
import {
  LinkedListVisualization,
  LinkedListInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  LINKED_LIST_CONFIG,
  generateRandomData,
  generateSteps,
} from './linked-list';

export const LinkedListVisualizer = () => {
  const config = { ...DEFAULT_CONFIG, ...LINKED_LIST_CONFIG };

  const { steps, initializeData } = useDataStructureInitializer({
    generateData: generateRandomData,
    generateSteps,
    config,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: initializeData,
  });

  const visualization = controls.currentStepData ? (
    <LinkedListVisualization step={controls.currentStepData} />
  ) : null;

  const extraInfo = controls.currentStepData ? (
    <LinkedListInfo step={controls.currentStepData} />
  ) : null;

  return (
    <DataStructureVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      visualization={visualization}
      extraInfo={extraInfo}
    />
  );
};
