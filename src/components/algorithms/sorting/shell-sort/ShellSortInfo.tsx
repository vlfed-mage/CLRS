import type { ShellSortStep } from './helpers';

interface ShellSortInfoProps {
  step: ShellSortStep;
}

export const ShellSortInfo = ({ step }: ShellSortInfoProps) => {
  if (step.gap <= 0) {
    return null;
  }

  return (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-sm text-blue-800">
        <strong>Current Gap:</strong> {step.gap}
      </p>
      <p className="text-xs text-blue-600 mt-1">
        Elements {step.gap} positions apart are being compared and sorted
      </p>
    </div>
  );
};
