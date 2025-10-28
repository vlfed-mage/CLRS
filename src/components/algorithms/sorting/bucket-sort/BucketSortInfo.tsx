import clsx from 'clsx';
import type { BucketSortStep } from './helpers';

interface BucketSortInfoProps {
  step: BucketSortStep;
}

export const BucketSortInfo = ({ step }: BucketSortInfoProps) => {
  const isDistributing =
    step.distributing && step.currentElement >= 0 && step.currentBucket >= 0;

  return (
    <div className="mt-4 space-y-3">
      {isDistributing && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Distributing:</strong> Placing element{' '}
            <strong>{step.array[step.currentElement]}</strong>
            {' (index '}{step.currentElement}{') into '}
            bucket <strong>{step.currentBucket}</strong>
          </p>
        </div>
      )}

      {step.sorting && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Sorting:</strong> Sorting bucket {step.currentBucket}{' '}
            using insertion sort
          </p>
        </div>
      )}

      {step.collecting && (
        <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
          <p className="text-sm text-purple-800">
            <strong>Collecting:</strong> Gathering sorted elements from bucket{' '}
            {step.currentBucket}
          </p>
        </div>
      )}

      {step.buckets.length > 0 && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mb-2">
            Buckets ({step.numBuckets} total):
          </p>
          <div className="space-y-1">
            {step.buckets.map((bucket, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className={clsx('text-xs px-2 py-1 rounded font-mono', {
                    'bg-yellow-200 font-bold': index === step.currentBucket,
                    'bg-gray-200': index !== step.currentBucket,
                  })}
                >
                  [{index}]:
                </span>
                <div className="flex gap-1 flex-wrap">
                  {bucket.length === 0 ? (
                    <span className="text-xs text-gray-400 italic">empty</span>
                  ) : (
                    bucket.map((value, valueIndex) => (
                      <span
                        key={valueIndex}
                        className="text-xs px-2 py-1 bg-blue-100 rounded"
                      >
                        {value}
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
