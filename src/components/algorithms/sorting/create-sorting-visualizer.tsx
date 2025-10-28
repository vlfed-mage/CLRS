import { useMemo, type ReactElement } from 'react';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import {
  DEFAULT_SORTING_CONFIG,
  type SortingConfig,
  type BaseSortStep,
} from './types';

interface InfoComponentProps<TStep extends BaseSortStep> {
  step: TStep;
}

interface SortingVisualizerConfig<TStep extends BaseSortStep> {
  sortingConfig: Partial<SortingConfig>;
  generateSteps: (array: number[]) => TStep[];
  getBarColor: (index: number, step: TStep) => string;
  codeLines: string[];
  legendItems: Array<{ color: string; label: string }>;
  InfoComponent?: (props: InfoComponentProps<TStep>) => ReactElement | null;
}

export const createSortingVisualizer = <TStep extends BaseSortStep>({
  sortingConfig,
  generateSteps,
  getBarColor,
  codeLines,
  legendItems,
  InfoComponent,
}: SortingVisualizerConfig<TStep>) => {
  const SortingVisualizerComponent = () => {
    const config = useMemo(
      () => ({ ...DEFAULT_SORTING_CONFIG, ...sortingConfig }),
      [sortingConfig]
    );

    const { steps, initializeData } = useSortingInitializer({
      generateSteps,
      config,
    });

    const controls = useVisualizerControls(steps, {
      onGenerateArray: initializeData,
    });

    const extraInfo =
      controls.currentStepData && InfoComponent ? (
        <InfoComponent step={controls.currentStepData} />
      ) : null;

    return (
      <SortingVisualizer
        controls={controls}
        codeLines={codeLines}
        legendItems={legendItems}
        getBarColor={getBarColor}
        extraInfo={extraInfo}
      />
    );
  };

  SortingVisualizerComponent.displayName = 'SortingVisualizerComponent';

  return SortingVisualizerComponent;
};
