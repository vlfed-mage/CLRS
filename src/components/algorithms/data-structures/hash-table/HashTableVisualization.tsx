import clsx from 'clsx';
import type { HashTableStep } from './helpers';

interface HashTableVisualizationProps {
  step: HashTableStep;
}

export const HashTableVisualization = ({
  step,
}: HashTableVisualizationProps) => {
  const getBucketColor = (index: number): string => {
    if (step.operation !== 'idle' && step.foundIndex === index) {
      return 'border-green-500 bg-green-50';
    }
    if (step.table[index].length > 1) {
      return 'border-yellow-500 bg-yellow-50';
    }
    if (step.table[index].length === 0) {
      return 'border-gray-300 bg-gray-100';
    }
    return 'border-blue-500 bg-blue-50';
  };

  const getEntryColor = (bucketIndex: number, entryKey: number): string => {
    if (
      step.operation !== 'idle' &&
      step.foundIndex === bucketIndex &&
      step.operationKey === entryKey
    ) {
      return 'bg-green-500 text-white';
    }
    return 'bg-blue-500 text-white';
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-3">
        {step.table.map((bucket, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-12 text-right font-mono text-sm text-gray-600">
              [{index}]
            </div>
            <div
              className={clsx(
                'flex-1 min-h-[60px] border-2 rounded-lg p-2 transition-all duration-300',
                getBucketColor(index)
              )}
            >
              {bucket.length === 0 ? (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  Empty
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {bucket.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className={clsx(
                        'px-3 py-1 rounded font-mono text-sm transition-all duration-300',
                        getEntryColor(index, entry.key)
                      )}
                    >
                      {entry.key}: {entry.value}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {bucket.length > 1 && (
              <div className="text-xs text-yellow-600 font-medium">
                {bucket.length} entries
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
