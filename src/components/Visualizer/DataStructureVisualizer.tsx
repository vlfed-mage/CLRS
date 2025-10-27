import type { ReactNode } from 'react';
import clsx from 'clsx';
import { VisualizerControls as VisualizerControlsComponent } from './VisualizerControls';
import type { VisualizerControls, LegendItem } from './types';

export type { VisualizerControls, LegendItem };

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
  const { currentStep, currentStepData, totalSteps } = controls;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-start">
        {/* Visualization Area */}
        <div className="flex flex-col h-full space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Data Structure Visualization
            </h3>
            <div
              className={clsx(
                'flex-1 flex items-center justify-center',
                'bg-gray-50 rounded p-4',
                'min-h-[400px]'
              )}
            >
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
              <span
                className={clsx(
                  'ml-2 text-green-600 font-semibold'
                )}
              >
                - Complete!
              </span>
            )}
          </div>

          {/* Controls */}
          <VisualizerControlsComponent
            controls={controls}
            newDataLabel="New Data"
          />
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
