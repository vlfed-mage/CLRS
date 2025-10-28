import type { QueueStep } from './helpers';

interface QueueInfoProps {
  step: QueueStep;
  maxSize?: number;
}

export const QueueInfo = ({ step, maxSize = 10 }: QueueInfoProps) => {
  const size =
    step.rear - step.front + 1 > 0 ? step.rear - step.front + 1 : 0;

  return (
    <div className="text-sm space-y-2">
      <div>
        <strong>Front Index:</strong> {step.front}
      </div>
      <div>
        <strong>Rear Index:</strong> {step.rear}
      </div>
      <div>
        <strong>Size:</strong> {size}
      </div>
      <div>
        <strong>Capacity:</strong> {maxSize}
      </div>
      <div>
        <strong>Operation:</strong>{' '}
        {step.operation === 'enqueue' && (
          <span className="text-purple-600">
            ENQUEUE({step.operationValue})
          </span>
        )}
        {step.operation === 'dequeue' && (
          <span className="text-green-600">
            DEQUEUE() → {step.operationValue}
          </span>
        )}
        {step.operation === 'idle' && (
          <span className="text-gray-600">-</span>
        )}
      </div>
      {step.front <= step.rear && (
        <div>
          <strong>Front Element:</strong> {step.array[step.front]}
        </div>
      )}
      <div>
        <strong>Empty:</strong> {step.front > step.rear ? 'Yes' : 'No'}
      </div>
    </div>
  );
};
