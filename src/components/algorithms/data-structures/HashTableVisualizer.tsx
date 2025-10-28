import { useMemo } from 'react';
import { DataStructureVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useDataStructureInitializer } from '@/hooks/useDataStructureInitializer';
import { DEFAULT_CONFIG } from './types';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  HASH_TABLE_CONFIG,
  generateRandomData,
  generateSteps,
  HashTableVisualization,
  HashTableInfo,
} from './hash-table';

export const HashTableVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...HASH_TABLE_CONFIG }),
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
    <HashTableVisualization step={controls.currentStepData} />
  ) : null;

  const extraInfo = controls.currentStepData ? (
    <HashTableInfo step={controls.currentStepData} />
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
