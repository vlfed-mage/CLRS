import type { QuickSortStep } from './helpers';

interface QuickSortInfoProps {
  step: QuickSortStep;
}

export const QuickSortInfo = ({ step }: QuickSortInfoProps) => {
  if (!step.activeRange) {
    return null;
  }

  return (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Active Range:</strong> [{step.activeRange[0]},{' '}
        {step.activeRange[1]}]
      </p>
      {step.pivotIndex >= 0 && (
        <p className="text-xs text-blue-600 mt-1">
          Pivot value: {step.array[step.pivotIndex]}
        </p>
      )}
    </div>
  );
};
