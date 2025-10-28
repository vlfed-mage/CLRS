import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import {
  RADIX_SORT_CONFIG,
  CODE_LINES,
  LEGEND_ITEMS,
  generateSteps,
  getBarColor,
} from './radix-sort';

export const RadixSortVisualizer = () => {
  const { steps, initializeData } = useSortingInitializer({
    generateSteps,
    config: RADIX_SORT_CONFIG,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: () => initializeData(),
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
