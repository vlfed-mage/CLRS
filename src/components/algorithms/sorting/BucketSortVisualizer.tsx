import { useMemo } from 'react';
import clsx from 'clsx';
import { SortingVisualizer } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';
import { useSortingInitializer } from '@/hooks/useSortingInitializer';
import { DEFAULT_SORTING_CONFIG } from './types';
import {
  CODE_LINES,
  LEGEND_ITEMS,
  BUCKET_SORT_CONFIG,
  generateSteps,
  getBarColor,
} from './bucket-sort';

export const BucketSortVisualizer = () => {
  const config = useMemo(
    () => ({ ...DEFAULT_SORTING_CONFIG, ...BUCKET_SORT_CONFIG }),
    []
  );

  const { steps, initializeData } = useSortingInitializer({
    generateSteps,
    config,
  });

  const controls = useVisualizerControls(steps, {
    onGenerateArray: initializeData,
  });

  const extraInfo = controls.currentStepData ? (
    <div className="mt-4 space-y-3">
      {controls.currentStepData.distributing &&
        controls.currentStepData.currentElement >= 0 &&
        controls.currentStepData.currentBucket >= 0 && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Distributing:</strong> Placing element{' '}
              <strong>
                {
                  controls.currentStepData.array[
                    controls.currentStepData.currentElement
                  ]
                }
              </strong>
              {' (index '}{controls.currentStepData.currentElement}{') into '}
              bucket <strong>{controls.currentStepData.currentBucket}</strong>
            </p>
          </div>
        )}

      {controls.currentStepData.sorting && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Sorting:</strong> Sorting bucket {controls.currentStepData.currentBucket}{' '}
            using insertion sort
          </p>
        </div>
      )}

      {controls.currentStepData.collecting && (
        <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
          <p className="text-sm text-purple-800">
            <strong>Collecting:</strong> Gathering sorted elements from bucket{' '}
            {controls.currentStepData.currentBucket}
          </p>
        </div>
      )}

      {controls.currentStepData.buckets.length > 0 && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mb-2">
            Buckets ({controls.currentStepData.numBuckets} total):
          </p>
          <div className="space-y-1">
            {controls.currentStepData.buckets.map((bucket, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className={clsx('text-xs px-2 py-1 rounded font-mono', {
                    'bg-yellow-200 font-bold':
                      idx === controls.currentStepData.currentBucket,
                    'bg-gray-200':
                      idx !== controls.currentStepData.currentBucket,
                  })}
                >
                  [{idx}]:
                </span>
                <div className="flex gap-1 flex-wrap">
                  {bucket.length === 0 ? (
                    <span className="text-xs text-gray-400 italic">empty</span>
                  ) : (
                    bucket.map((val, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-100 rounded"
                      >
                        {val}
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
  ) : null;

  return (
    <SortingVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
      extraInfo={extraInfo}
    />
  );
};
