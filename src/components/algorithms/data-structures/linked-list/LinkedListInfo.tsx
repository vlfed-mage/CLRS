import { getListSize } from './helpers';
import type { LinkedListStep } from './helpers';

interface LinkedListInfoProps {
  step: LinkedListStep;
}

export const LinkedListInfo = ({ step }: LinkedListInfoProps) => {
  const listSize = getListSize(step.nodesMap, step.head);
  const headNode = step.head ? step.nodesMap.get(step.head) : null;
  const currentNode = step.currentNode
    ? step.nodesMap.get(step.currentNode)
    : null;

  return (
    <div className="text-sm space-y-2">
      <div>
        <strong>Size:</strong> {listSize}
      </div>
      <div>
        <strong>Head:</strong>{' '}
        {step.head !== null
          ? `${headNode?.value} (${step.head.substring(0, 8)}...)`
          : 'null'}
      </div>
      <div>
        <strong>Operation:</strong>{' '}
        {step.operation === 'insert' && (
          <span className="text-purple-600">
            INSERT({step.operationValue})
          </span>
        )}
        {step.operation === 'delete' && (
          <span className="text-red-600">
            DELETE({step.operationValue})
          </span>
        )}
        {step.operation === 'search' && (
          <span className="text-blue-600">
            SEARCH({step.operationValue})
          </span>
        )}
        {step.operation === 'idle' && (
          <span className="text-gray-600">-</span>
        )}
      </div>
      {currentNode && (
        <div>
          <strong>Current Node:</strong> {currentNode.value}
        </div>
      )}
    </div>
  );
};
