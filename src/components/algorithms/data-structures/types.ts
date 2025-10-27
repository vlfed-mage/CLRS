export interface BaseStep {
  highlightedLine: number;
}

export interface DataStructureConfig {
  maxSize?: number;
  initialSize?: number;
  minValue?: number;
  maxValue?: number;
}

export const DEFAULT_CONFIG: Required<DataStructureConfig> = {
  maxSize: 10,
  initialSize: 5,
  minValue: 1,
  maxValue: 99,
};
