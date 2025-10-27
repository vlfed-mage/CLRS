import clsx from 'clsx';
import type { QueueStep } from './helpers';

interface QueueVisualizationProps {
  step: QueueStep;
  maxSize: number;
}

export const QueueVisualization = ({
  step,
  maxSize,
}: QueueVisualizationProps) => {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="flex gap-2 w-full max-w-4xl">
        {Array.from({ length: maxSize }, (_, index) => {
          const isFront = index === step.front;
          const isRear = index === step.rear;

          return (
            <div key={index} className="flex-1 text-center">
              <div className="h-6 flex flex-col justify-center">
                {isFront && (
                  <div className="text-xs font-semibold text-green-600">
                    ↓ FRONT
                  </div>
                )}
                {isRear && !isFront && (
                  <div className="text-xs font-semibold text-purple-600">
                    ↓ REAR
                  </div>
                )}
                {isFront && isRear && (
                  <div className="text-xs font-semibold text-blue-600">
                    ↓ F/R
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 w-full max-w-4xl">
        {Array.from({ length: maxSize }, (_, index) => {
          const isActive = index >= step.front && index <= step.rear;
          const value = isActive ? step.array[index] : null;
          const isFront = index === step.front;
          const isRear = index === step.rear;
          const isFrontOp = isFront && step.operation === 'dequeue';
          const isRearOp = isRear && step.operation === 'enqueue';

          return (
            <div
              key={index}
              className={clsx(
                'flex-1 h-20 rounded-lg border-2',
                'flex flex-col items-center justify-center',
                'font-mono text-lg font-semibold',
                'transition-all duration-300',
                {
                  'bg-green-500 border-green-600 text-white scale-105':
                    isFrontOp,
                  'bg-purple-500 border-purple-600 text-white scale-105':
                    isRearOp && !isFrontOp,
                  'bg-green-400 border-green-500 text-white':
                    isFront && isActive && !isFrontOp,
                  'bg-purple-400 border-purple-500 text-white':
                    isRear && isActive && !isFrontOp && !isRearOp,
                  'bg-blue-500 border-blue-600 text-white':
                    isActive && !isFront && !isRear && !isFrontOp && !isRearOp,
                  'bg-gray-100 border-gray-300 text-gray-400': !isActive,
                }
              )}
            >
              <div>{value !== null ? value : '—'}</div>
              <div className="text-xs mt-1 opacity-70">[{index}]</div>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-gray-500">
        ← Dequeue from FRONT | Enqueue at REAR →
      </div>
    </div>
  );
};
