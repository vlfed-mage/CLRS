import type { ReactNode } from 'react';
import clsx from 'clsx';
import { VisualizerControls as VisualizerControlsComponent } from './VisualizerControls';
import type { VisualizerControls, LegendItem } from './types';

export type { VisualizerControls, LegendItem };

interface AlgorithmVisualizerProps<TStep> {
  controls: VisualizerControls<
    TStep & {
      array: number[];
      sorted: boolean;
      highlightedLine: number;
    }
  >;
  codeLines: string[];
  legendItems: LegendItem[];
  getBarColor: (
    index: number,
    step: TStep & {
      array: number[];
      sorted: boolean;
      highlightedLine: number;
    }
  ) => string;
  extraInfo?: ReactNode;
}

export const AlgorithmVisualizer = <TStep,>({
  controls,
  codeLines,
  legendItems,
  getBarColor,
  extraInfo,
}: AlgorithmVisualizerProps<TStep>) => {
  const { currentStep, currentStepData, totalSteps } = controls;

  const maxValue = currentStepData?.array
    ? Math.max(...currentStepData.array)
    : 100;
  const maxHeight = 200;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-start">
        {/* Visualization Area */}
        <div className="flex flex-col h-full space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Array Visualization
            </h3>
            <div
              className={clsx(
                'flex-1 flex items-end justify-center',
                'gap-2 bg-gray-50 rounded p-4',
                'min-h-[400px]'
              )}
            >
              {currentStepData?.array.map((value, index) => (
                <div
                  key={index}
                  className={clsx(
                    'flex flex-col items-center',
                    'gap-2 flex-1'
                  )}
                >
                  <div
                    className={clsx(
                      'w-full transition-all duration-300 rounded-t',
                      getBarColor(index, currentStepData)
                    )}
                    style={{
                      height: `${(value / maxValue) * maxHeight}px`,
                    }}
                  />
                  <span className="text-xs font-mono text-gray-700">
                    {value}
                  </span>
                </div>
              ))}
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
              <span
                className={clsx(
                  'ml-2 text-green-600 font-semibold'
                )}
              >
                - Sorted!
              </span>
            )}
          </div>

          {/* Controls */}
          <VisualizerControlsComponent
            controls={controls}
            newDataLabel="New Array"
          />
        </div>

        {/* Code Display */}
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Algorithm Code
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 flex-1">
            <pre className="text-sm">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={clsx(
                    'transition-colors duration-200',
                    'px-2 leading-6',
                    {
                      'bg-yellow-500 bg-opacity-30':
                        currentStepData?.highlightedLine === index,
                    }
                  )}
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
