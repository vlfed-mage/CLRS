import type { StackStep } from './helpers';

interface StackInfoProps {
  step: StackStep;
  maxSize?: number;
}

export const StackInfo = ({ step, maxSize = 10 }: StackInfoProps) => {
  return (
    <div className="text-sm space-y-2">
      <div>
        <strong>Top Index:</strong> {step.top}
      </div>
      <div>
        <strong>Size:</strong> {step.array.length}
      </div>
      <div>
        <strong>Capacity:</strong> {maxSize}
      </div>
      <div>
        <strong>Operation:</strong>{' '}
        {step.operation === 'push' && (
          <span className="text-green-600">
            PUSH({step.operationValue})
          </span>
        )}
        {step.operation === 'pop' && (
          <span className="text-red-600">
            POP() → {step.operationValue}
          </span>
        )}
        {step.operation === 'idle' && (
          <span className="text-gray-600">-</span>
        )}
      </div>
      {step.top >= 0 && (
        <div>
          <strong>Top Element:</strong> {step.array[step.top]}
        </div>
      )}
      <div>
        <strong>Empty:</strong> {step.top === -1 ? 'Yes' : 'No'}
      </div>
    </div>
  );
};
