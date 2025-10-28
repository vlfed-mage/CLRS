import { useMemo, type ReactElement } from 'react';
import { DataStructureVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useDataStructureInitializer } from '@/hooks/useDataStructureInitializer';
import { DEFAULT_CONFIG, type DataStructureConfig, type BaseStep } from './types';

interface ComponentProps<TStep extends BaseStep> {
  step: TStep;
  maxSize?: number;
}

interface DataStructureVisualizerConfig<TData, TStep extends BaseStep> {
  dataStructureConfig: Partial<DataStructureConfig>;
  generateData: (config: DataStructureConfig) => TData;
  generateSteps: (data: TData, config: DataStructureConfig) => TStep[];
  codeLines: string[];
  legendItems: Array<{ color: string; label: string }>;
  VisualizationComponent: (props: ComponentProps<TStep>) => ReactElement;
  InfoComponent: (props: ComponentProps<TStep>) => ReactElement;
  passMaxSizeToComponents?: boolean;
}

export const createDataStructureVisualizer = <
  TData,
  TStep extends BaseStep,
>({
  dataStructureConfig,
  generateData,
  generateSteps,
  codeLines,
  legendItems,
  VisualizationComponent,
  InfoComponent,
  passMaxSizeToComponents = false,
}: DataStructureVisualizerConfig<TData, TStep>) => {
  const DataStructureVisualizerComponent = () => {
    const config = useMemo(
      () => ({ ...DEFAULT_CONFIG, ...dataStructureConfig }),
      [dataStructureConfig]
    );

    const { steps, initializeData } = useDataStructureInitializer({
      generateData,
      generateSteps,
      config,
    });

    const controls = useVisualizerControls(steps, {
      onGenerateArray: initializeData,
    });

    const visualizationProps: ComponentProps<TStep> = passMaxSizeToComponents
      ? { step: controls.currentStepData as TStep, maxSize: config.maxSize }
      : { step: controls.currentStepData as TStep };

    const visualization = controls.currentStepData ? (
      <VisualizationComponent {...visualizationProps} />
    ) : null;

    const infoProps: ComponentProps<TStep> = passMaxSizeToComponents
      ? { step: controls.currentStepData as TStep, maxSize: config.maxSize }
      : { step: controls.currentStepData as TStep };

    const extraInfo = controls.currentStepData ? (
      <InfoComponent {...infoProps} />
    ) : null;

    return (
      <DataStructureVisualizer
        controls={controls}
        codeLines={codeLines}
        legendItems={legendItems}
        visualization={visualization}
        extraInfo={extraInfo}
      />
    );
  };

  DataStructureVisualizerComponent.displayName = 'DataStructureVisualizerComponent';

  return DataStructureVisualizerComponent;
};
