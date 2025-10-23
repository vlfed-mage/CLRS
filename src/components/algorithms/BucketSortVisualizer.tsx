import { useState, useEffect } from 'react';
import { AlgorithmVisualizer } from '@/components/AlgorithmVisualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface SortStep {
  array: number[];
  buckets: number[][];
  currentElement: number;
  currentBucket: number;
  distributing: boolean;
  sorting: boolean;
  collecting: boolean;
  sorted: boolean;
  highlightedLine: number;
  numBuckets: number;
}

const CODE_LINES = [
  'const bucketSort = (arr: number[]) => {',
  '  const n = arr.length;',
  '  const buckets: number[][] = Array(n).fill([]).map(() => []);',
  '',
  '  // Find min and max for normalization',
  '  const min = Math.min(...arr);',
  '  const max = Math.max(...arr);',
  '  const range = max - min;',
  '',
  '  // Distribute elements into buckets',
  '  for (let i = 0; i < n; i++) {',
  '    const bucketIndex = Math.floor(((arr[i] - min) / range) * (n - 1));',
  '    buckets[bucketIndex].push(arr[i]);',
  '  }',
  '',
  '  // Sort individual buckets (typically insertion sort)',
  '  for (let i = 0; i < n; i++) {',
  '    if (buckets[i].length > 1) {',
  '      buckets[i].sort((a, b) => a - b);',
  '    }',
  '  }',
  '',
  '  // Concatenate all buckets',
  '  let index = 0;',
  '  for (let i = 0; i < n; i++) {',
  '    for (let j = 0; j < buckets[i].length; j++) {',
  '      arr[index] = buckets[i][j];',
  '      index++;',
  '    }',
  '  }',
  '',
  '  return arr;',
  '};',
];

const LEGEND_ITEMS = [
  { color: 'bg-blue-400', label: 'Current Element' },
  { color: 'bg-purple-400', label: 'In Bucket' },
  { color: 'bg-yellow-400', label: 'Sorting Bucket' },
  { color: 'bg-green-400', label: 'Sorted' },
  { color: 'bg-gray-300', label: 'Unsorted' },
];

export const BucketSortVisualizer = () => {
  const [steps, setSteps] = useState<SortStep[]>([]);

  const generateRandomArray = (size: number = 10) => {
    const newArray = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 100) + 1
    );
    generateSteps(newArray);
  };

  const generateSteps = (arr: number[]) => {
    const newSteps: SortStep[] = [];
    const array = [...arr];
    const n = array.length;

    // Initial state
    newSteps.push({
      array: [...array],
      buckets: [],
      currentElement: -1,
      currentBucket: -1,
      distributing: false,
      sorting: false,
      collecting: false,
      sorted: false,
      highlightedLine: 0,
      numBuckets: n,
    });

    // Line 1: const n = arr.length;
    newSteps.push({
      array: [...array],
      buckets: [],
      currentElement: -1,
      currentBucket: -1,
      distributing: false,
      sorting: false,
      collecting: false,
      sorted: false,
      highlightedLine: 1,
      numBuckets: n,
    });

    // Line 2: Create buckets
    const buckets: number[][] = Array(n)
      .fill([])
      .map(() => []);
    newSteps.push({
      array: [...array],
      buckets: buckets.map((b) => [...b]),
      currentElement: -1,
      currentBucket: -1,
      distributing: false,
      sorting: false,
      collecting: false,
      sorted: false,
      highlightedLine: 2,
      numBuckets: n,
    });

    // Line 5-7: Find min, max, range
    const min = Math.min(...array);
    const max = Math.max(...array);
    const range = max - min;

    newSteps.push({
      array: [...array],
      buckets: buckets.map((b) => [...b]),
      currentElement: -1,
      currentBucket: -1,
      distributing: false,
      sorting: false,
      collecting: false,
      sorted: false,
      highlightedLine: 5,
      numBuckets: n,
    });

    // Handle edge case: all elements are the same
    if (range === 0) {
      // Put all elements in the first bucket
      for (let i = 0; i < n; i++) {
        buckets[0].push(array[i]);
      }
      newSteps.push({
        array: [...array],
        buckets: buckets.map((b) => [...b]),
        currentElement: -1,
        currentBucket: 0,
        distributing: true,
        sorting: false,
        collecting: false,
        sorted: false,
        highlightedLine: 12,
        numBuckets: n,
      });
    } else {
      // Distribute elements into buckets
      for (let i = 0; i < n; i++) {
        // Line 10: for loop
        newSteps.push({
          array: [...array],
          buckets: buckets.map((b) => [...b]),
          currentElement: i,
          currentBucket: -1,
          distributing: true,
          sorting: false,
          collecting: false,
          sorted: false,
          highlightedLine: 10,
          numBuckets: n,
        });

        // Line 11: Calculate bucket index
        const bucketIndex = Math.floor(((array[i] - min) / range) * (n - 1));
        newSteps.push({
          array: [...array],
          buckets: buckets.map((b) => [...b]),
          currentElement: i,
          currentBucket: bucketIndex,
          distributing: true,
          sorting: false,
          collecting: false,
          sorted: false,
          highlightedLine: 11,
          numBuckets: n,
        });

        // Line 12: Push to bucket
        buckets[bucketIndex].push(array[i]);
        newSteps.push({
          array: [...array],
          buckets: buckets.map((b) => [...b]),
          currentElement: i,
          currentBucket: bucketIndex,
          distributing: true,
          sorting: false,
          collecting: false,
          sorted: false,
          highlightedLine: 12,
          numBuckets: n,
        });
      }
    }

    // Sort individual buckets
    for (let i = 0; i < n; i++) {
      // Line 16: for loop
      newSteps.push({
        array: [...array],
        buckets: buckets.map((b) => [...b]),
        currentElement: -1,
        currentBucket: i,
        distributing: false,
        sorting: false,
        collecting: false,
        sorted: false,
        highlightedLine: 16,
        numBuckets: n,
      });

      // Skip empty buckets or buckets with only one element (already sorted)
      if (buckets[i].length <= 1) continue;

      // Line 17: if check
      newSteps.push({
        array: [...array],
        buckets: buckets.map((b) => [...b]),
        currentElement: -1,
        currentBucket: i,
        distributing: false,
        sorting: true,
        collecting: false,
        sorted: false,
        highlightedLine: 17,
        numBuckets: n,
      });

      // Line 18: Sort bucket
      buckets[i].sort((a, b) => a - b);
      newSteps.push({
        array: [...array],
        buckets: buckets.map((b) => [...b]),
        currentElement: -1,
        currentBucket: i,
        distributing: false,
        sorting: true,
        collecting: false,
        sorted: false,
        highlightedLine: 18,
        numBuckets: n,
      });
    }

    // Concatenate all buckets
    let index = 0;

    // Line 23: let index = 0
    newSteps.push({
      array: [...array],
      buckets: buckets.map((b) => [...b]),
      currentElement: -1,
      currentBucket: -1,
      distributing: false,
      sorting: false,
      collecting: true,
      sorted: false,
      highlightedLine: 23,
      numBuckets: n,
    });

    // Line 24-27: Collect from buckets
    for (let i = 0; i < n; i++) {
      newSteps.push({
        array: [...array],
        buckets: buckets.map((b) => [...b]),
        currentElement: index,
        currentBucket: i,
        distributing: false,
        sorting: false,
        collecting: true,
        sorted: false,
        highlightedLine: 24,
        numBuckets: n,
      });

      for (let j = 0; j < buckets[i].length; j++) {
        newSteps.push({
          array: [...array],
          buckets: buckets.map((b) => [...b]),
          currentElement: index,
          currentBucket: i,
          distributing: false,
          sorting: false,
          collecting: true,
          sorted: false,
          highlightedLine: 25,
          numBuckets: n,
        });

        // Line 26: Place element
        array[index] = buckets[i][j];
        newSteps.push({
          array: [...array],
          buckets: buckets.map((b) => [...b]),
          currentElement: index,
          currentBucket: i,
          distributing: false,
          sorting: false,
          collecting: true,
          sorted: false,
          highlightedLine: 26,
          numBuckets: n,
        });

        // Line 27: Increment index
        index++;
        newSteps.push({
          array: [...array],
          buckets: buckets.map((b) => [...b]),
          currentElement: index - 1,
          currentBucket: i,
          distributing: false,
          sorting: false,
          collecting: true,
          sorted: false,
          highlightedLine: 27,
          numBuckets: n,
        });
      }
    }

    // Final sorted state
    newSteps.push({
      array: [...array],
      buckets: buckets.map((b) => [...b]),
      currentElement: -1,
      currentBucket: -1,
      distributing: false,
      sorting: false,
      collecting: false,
      sorted: true,
      highlightedLine: 31,
      numBuckets: n,
    });

    setSteps(newSteps);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  const controls = useVisualizerControls(steps, {
    onGenerateArray: () => generateRandomArray(),
  });

  const getBarColor = (index: number, step: SortStep) => {
    if (step.sorted) {
      return 'bg-green-400';
    }
    if (step.distributing && index === step.currentElement) {
      return 'bg-blue-400';
    }
    if (step.collecting && index === step.currentElement) {
      return 'bg-purple-400';
    }
    return 'bg-gray-300';
  };

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
                  className={`text-xs px-2 py-1 rounded font-mono ${
                    idx === controls.currentStepData.currentBucket
                      ? 'bg-yellow-200 font-bold'
                      : 'bg-gray-200'
                  }`}
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
    <AlgorithmVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      getBarColor={getBarColor}
      extraInfo={extraInfo}
    />
  );
};
