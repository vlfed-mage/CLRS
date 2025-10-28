import { useMemo } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import { DEFAULT_SORTING_CONFIG } from './types';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  BUBBLE_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './bubble-sort';

export const BubbleSortVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_SORTING_CONFIG, ...BUBBLE_SORT_CONFIG }),
    []
  );

  const { steps, initializeData } = useSortingInitializer({
    generateSteps,
    config,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: initializeData,
  });

  return (
    <SortingVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
    />
  );
};
