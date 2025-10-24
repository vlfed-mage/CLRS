import type { ReactNode } from 'react';

export interface LegendItem {
  color: string;
  label: string;
}

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

interface DataStructureVisualizerProps<TStep> {
  controls: VisualizerControls<
    TStep & {
      sorted: boolean;
      highlightedLine: number;
    }
  >;
  codeLines: string[];
  legendItems: LegendItem[];
  visualization: ReactNode;
  extraInfo?: ReactNode;
}

export const DataStructureVisualizer = <TStep,>({
  controls,
  codeLines,
  legendItems,
  visualization,
  extraInfo,
}: DataStructureVisualizerProps<TStep>) => {
  const {
    currentStep,
    currentStepData,
    totalSteps,
    isPlaying,
    speed,
    setSpeed,
    handlePlay,
    handlePause,
    handleReset,
    handleNext,
    handlePrevious,
    handleNewArray,
  } = controls;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-start">
        {/* Visualization Area */}
        <div className="flex flex-col h-full space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Data Structure Visualization
            </h3>
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded p-4 min-h-[400px]">
              {visualization}
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 text-sm flex-wrap">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 ${item.color} rounded`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Extra Info */}
          {extraInfo && <div className="mb-6">{extraInfo}</div>}

          {/* Step Info */}
          <div className="mb-6 text-sm text-gray-700">
            Step {currentStep} of {totalSteps}
            {currentStepData?.sorted && (
              <span className="ml-2 text-green-600 font-semibold">
                - Complete!
              </span>
            )}
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {!isPlaying ? (
                <button
                  onClick={handlePlay}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Play
                </button>
              ) : (
                <button
                  onClick={handlePause}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Pause
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={currentStep >= totalSteps}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Reset
              </button>
              <button
                onClick={handleNewArray}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                New Data
              </button>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-700 font-medium">
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
              <span className="text-sm text-gray-600 w-20">{speed}ms</span>
            </div>
          </div>
        </div>

        {/* Code Display */}
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Data Structure Code
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 flex-1">
            <pre className="text-sm">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`transition-colors duration-200 px-2 leading-6 ${
                    currentStepData?.highlightedLine === index
                      ? 'bg-yellow-500 bg-opacity-30'
                      : ''
                  }`}
                >
                  <code className="text-gray-100">{line || '\u00A0'}</code>
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
