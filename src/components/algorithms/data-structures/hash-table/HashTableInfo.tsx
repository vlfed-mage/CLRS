import type { HashTableStep } from './helpers';

interface HashTableInfoProps {
  step: HashTableStep;
}

export const HashTableInfo = ({ step }: HashTableInfoProps) => {
  const getOperationText = (): string => {
    switch (step.operation) {
      case 'insert':
        return `Inserting key ${step.operationKey} with value ${step.operationValue} at index ${step.foundIndex}${
          step.collisionCount && step.collisionCount > 0
            ? ` (Collision: ${step.collisionCount} existing entries)`
            : ''
        }`;
      case 'search':
        return `Searching for key ${step.operationKey} at index ${step.foundIndex}${
          step.operationValue !== undefined
            ? ` → Found value: ${step.operationValue}`
            : ' → Not found'
        }`;
      case 'delete':
        return `Deleting key ${step.operationKey} from index ${step.foundIndex}`;
      default:
        return 'Idle';
    }
  };

  const totalEntries = step.table.reduce(
    (sum, bucket) => sum + bucket.length,
    0
  );
  const loadFactor = (totalEntries / step.tableSize).toFixed(2);
  const bucketsWithCollisions = step.table.filter(
    bucket => bucket.length > 1
  ).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-700">Operation:</span>
        <span className="text-gray-900">{getOperationText()}</span>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <span className="font-semibold text-gray-700">Total Entries:</span>
          <span className="ml-2 text-gray-900">{totalEntries}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Load Factor:</span>
          <span className="ml-2 text-gray-900">{loadFactor}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Collisions:</span>
          <span className="ml-2 text-gray-900">{bucketsWithCollisions}</span>
        </div>
      </div>

      <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
        <strong>Hash Function:</strong> index = key % {step.tableSize} |{' '}
        <strong>Collision Resolution:</strong> Chaining (Linked Lists)
      </div>
    </div>
  );
};
