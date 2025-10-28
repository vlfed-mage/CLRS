import { useMemo } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import { DEFAULT_SORTING_CONFIG } from './types';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  SHELL_SORT_CONFIG,
  generateSteps,
  getBarColor,
  ShellSortInfo,
} from './shell-sort';

export const ShellSortVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_SORTING_CONFIG, ...SHELL_SORT_CONFIG }),
    []
  );

  const { steps, initializeData } = useSortingInitializer({
    generateSteps,
    config,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: initializeData,
  });

  const extraInfo = controls.currentStepData ? (
    <ShellSortInfo step={controls.currentStepData} />
  ) : null;

  return (
    <SortingVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
      extraInfo={extraInfo}
    />
  );
};
