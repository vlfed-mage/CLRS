import type { HeapSortStep } from './helpers';

interface HeapSortInfoProps {
  step: HeapSortStep;
}

export const HeapSortInfo = ({ step }: HeapSortInfoProps) => {
  return (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Heap Size:</strong> {step.heapSize}
      </p>
      {step.building && (
        <p className="text-xs text-blue-600 mt-1">
          Building max heap from bottom up
        </p>
      )}
      {step.sorting && (
        <p className="text-xs text-blue-600 mt-1">
          Extracting max element and re-heapifying
        </p>
      )}
    </div>
  );
};
