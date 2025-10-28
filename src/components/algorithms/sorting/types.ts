export interface BaseSortStep {
  array: number[];
  sorted: boolean;
  highlightedLine: number;
}

export interface SortingConfig {
  arraySize?: number;
  minValue?: number;
  maxValue?: number;
}

export const DEFAULT_SORTING_CONFIG: Required<SortingConfig> = {
  arraySize: 10,
  minValue: 1,
  maxValue: 100,
};
