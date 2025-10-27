import clsx from 'clsx';
import { Button } from '@/components/Button';
import type { VisualizerControls as VisualizerControlsType } from './types';

interface VisualizerControlsComponentProps<TStep> {
  controls: VisualizerControlsType<TStep>;
  newDataLabel?: string;
}

export const VisualizerControls = <TStep,>({
  controls,
  newDataLabel = 'New Data',
}: VisualizerControlsComponentProps<TStep>) => {
  const {
    currentStep,
    totalSteps,
    isPlaying,
    speed,
    handlePrevious,
    handlePlay,
    handlePause,
    handleNext,
    handleReset,
    handleNewArray,
    setSpeed,
  } = controls;
  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="secondary"
        >
          Previous
        </Button>
        {!isPlaying ? (
          <Button onClick={handlePlay} variant="primary">
            Play
          </Button>
        ) : (
          <Button onClick={handlePause} variant="warning">
            Pause
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={currentStep >= totalSteps}
          variant="secondary"
        >
          Next
        </Button>
        <Button onClick={handleReset} variant="secondary">
          Reset
        </Button>
        <Button onClick={handleNewArray} variant="success">
          {newDataLabel}
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <label
          className={clsx(
            'text-sm text-gray-700 font-medium'
          )}
        >
          Speed:
        </label>
        <input
          type="range"
          min="100"
          max="2000"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="flex-1"
        />
        <span
          className={clsx(
            'text-sm text-gray-600 w-20'
          )}
        >
          {speed}ms
        </span>
      </div>
    </div>
  );
};
