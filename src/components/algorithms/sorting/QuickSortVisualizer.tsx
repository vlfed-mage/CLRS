import { useMemo } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import { DEFAULT_SORTING_CONFIG } from './types';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  QUICK_SORT_CONFIG,
  generateSteps,
  getBarColor,
  QuickSortInfo,
} from './quick-sort';

export const QuickSortVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_SORTING_CONFIG, ...QUICK_SORT_CONFIG }),
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
    <QuickSortInfo step={controls.currentStepData} />
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
