import { useMemo } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import { DEFAULT_SORTING_CONFIG } from './types';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  SELECTION_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './selection-sort';

export const SelectionSortVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_SORTING_CONFIG, ...SELECTION_SORT_CONFIG }),
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
