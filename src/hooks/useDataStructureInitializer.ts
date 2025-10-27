import { useState, useEffect, useCallback } from 'react';
import type { DataStructureConfig } from '@/components/algorithms/data-structures/types';

interface UseDataStructureInitializerProps<TData, TStep> {
  generateData: (config: DataStructureConfig) => TData;
  generateSteps: (data: TData, config: DataStructureConfig) => TStep[];
  config: DataStructureConfig;
}

export const useDataStructureInitializer = <TData, TStep>({
  generateData,
  generateSteps,
  config,
}: UseDataStructureInitializerProps<TData, TStep>) => {
  const [steps, setSteps] = useState<TStep[]>([]);

  const initializeData = useCallback((): void => {
    const data = generateData(config);
    const newSteps = generateSteps(data, config);
    setSteps(newSteps);
  }, [generateData, generateSteps, config]);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  return {
    steps,
    initializeData,
  };
};
