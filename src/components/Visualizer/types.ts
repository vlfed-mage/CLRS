export interface VisualizerControls<TStep> {
  currentStep: number;
  currentStepData: TStep;
  totalSteps: number;
  isPlaying: boolean;
  speed: number;
  setSpeed: (speed: number) => void;
  handlePlay: () => void;
  handlePause: () => void;
  handleReset: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  handleNewArray: () => void;
}

export interface LegendItem {
  color: string;
  label: string;
}
