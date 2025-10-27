import { useMemo } from 'react';
import { DataStructureVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useDataStructureInitializer } from '@/hooks/useDataStructureInitializer';
import { DEFAULT_CONFIG } from './types';
import {
  QueueVisualization,
  QueueInfo,
  CODE_LINES,
  LEGEND_ITEMS,
  QUEUE_CONFIG,
  generateRandomData,
  generateSteps,
} from './queue';

export const QueueVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...QUEUE_CONFIG }),
    []
  );

  const { steps, initializeData } = useDataStructureInitializer({
    generateData: generateRandomData,
    generateSteps,
    config,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: initializeData,
  });

  const visualization = controls.currentStepData ? (
    <QueueVisualization
      step={controls.currentStepData}
      maxSize={config.maxSize}
    />
  ) : null;

  const extraInfo = controls.currentStepData ? (
    <QueueInfo step={controls.currentStepData} maxSize={config.maxSize} />
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
