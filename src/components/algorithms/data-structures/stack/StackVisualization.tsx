import clsx from 'clsx';
import type { StackStep } from './helpers';

interface StackVisualizationProps {
  step: StackStep;
  maxSize?: number;
}

export const StackVisualization = ({
  step,
  maxSize = 10,
}: StackVisualizationProps) => {
  return (
    <div className="flex flex-col-reverse gap-2 items-center w-full">
      {Array.from({ length: maxSize }, (_, index) => {
        const isOccupied = index < step.array.length;
        const value = isOccupied ? step.array[index] : null;
        const isTop = index === step.top;
        const isOperation = isTop && step.operation !== 'idle';

        return (
          <div
            key={index}
            className="w-full max-w-xs flex items-center gap-4"
          >
            <span className="text-xs text-gray-500 w-6 text-right">
              {index}
            </span>

            <div
              className={clsx(
                'flex-1 h-12 rounded-lg border-2',
                'flex items-center justify-center',
                'font-mono text-lg font-semibold',
                'transition-all duration-300',
                {
                  'bg-green-500 border-green-600 text-white scale-105':
                    isOperation,
                  'bg-blue-500 border-blue-600 text-white':
                    isOccupied && !isOperation,
                  'bg-gray-100 border-gray-300 text-gray-400': !isOccupied,
                }
              )}
            >
              {value !== null ? value : '—'}
            </div>

            <div className="w-16 text-xs font-semibold">
              {isTop && <span className="text-green-600">← TOP</span>}
            </div>
          </div>
        );
      })}
      <div className="text-xs text-gray-500 mt-2">
        ↑ Stack grows upward
      </div>
    </div>
  );
};
