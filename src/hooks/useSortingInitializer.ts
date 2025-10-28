import { useState, useEffect, useCallback } from 'react';
import type { SortingConfig } from '@/components/algorithms/sorting/types';

interface UseSortingInitializerProps<TStep> {
  generateSteps: (array: number[]) => TStep[];
  config: SortingConfig;
}

export const useSortingInitializer = <TStep,>({
  generateSteps,
  config,
}: UseSortingInitializerProps<TStep>) => {
  const [steps, setSteps] = useState<TStep[]>([]);

  const generateRandomArray = useCallback(
    (size: number): number[] => {
      const arraySize = size || config.arraySize || 10;
      const minValue = config.minValue || 1;
      const maxValue = config.maxValue || 100;

      return Array.from(
        { length: arraySize },
        () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
      );
    },
    [config]
  );

  const initializeData = useCallback((): void => {
    const array = generateRandomArray(config.arraySize || 10);
    const newSteps = generateSteps(array);
    setSteps(newSteps);
  }, [generateRandomArray, generateSteps, config]);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  return {
    steps,
    initializeData,
  };
};
