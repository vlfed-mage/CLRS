import { DataStructureVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useDataStructureInitializer } from '@/hooks/useDataStructureInitializer';
import { DEFAULT_CONFIG } from './types';
import {
  StackVisualization,
  StackInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  STACK_CONFIG,
  generateRandomData,
  generateSteps,
} from './stack';

export const StackVisualizer = () => {
  const config = { ...DEFAULT_CONFIG, ...STACK_CONFIG };

  const { steps, initializeData } = useDataStructureInitializer({
    generateData: generateRandomData,
    generateSteps,
    config,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: initializeData,
  });

  const visualization = controls.currentStepData ? (
    <StackVisualization
      step={controls.currentStepData}
      maxSize={config.maxSize}
    />
  ) : null;

  const extraInfo = controls.currentStepData ? (
    <StackInfo step={controls.currentStepData} maxSize={config.maxSize} />
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
