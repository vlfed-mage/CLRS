import clsx from 'clsx';
import type { Node, LinkedListStep } from './helpers';

interface LinkedListVisualizationProps {
  step: LinkedListStep;
}

const getNodesInOrder = (
  nodesMap: Map<string, Node>,
  head: string | null
): Node[] => {
  const nodesInOrder: Node[] = [];
  let current = head;

  while (current !== null) {
    const node = nodesMap.get(current);
    if (!node) break;
    nodesInOrder.push(node);
    current = node.next;
  }

  return nodesInOrder;
};

export const LinkedListVisualization = ({
  step,
}: LinkedListVisualizationProps) => {
  const nodesInOrder = getNodesInOrder(step.nodesMap, step.head);

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {step.head !== null ? (
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {nodesInOrder.map((node) => {
            const isHead = node.id === step.head;
            const isCurrent = node.id === step.currentNode;
            const isDelete = isCurrent && step.operation === 'delete';
            const isInsert = isCurrent && step.operation === 'insert';
            const isOperation = isDelete || isInsert;

            return (
              <div key={node.id} className="flex items-center gap-2">
                {isHead && (
                  <div
                    className={clsx(
                      'text-xs font-semibold px-2 py-1',
                      'bg-green-100 text-green-700',
                      'border border-green-300 rounded'
                    )}
                  >
                    HEAD
                  </div>
                )}

                <div
                  className={clsx(
                    'flex items-center border-2',
                    'rounded-lg overflow-hidden',
                    'transition-all duration-300',
                    {
                      'border-red-600 scale-105': isDelete,
                      'border-purple-600 scale-105': isInsert,
                      'border-green-600': isHead && !isOperation,
                      'border-blue-600': !isHead && !isOperation,
                    }
                  )}
                >
                  <div
                    className={clsx(
                      'px-2 sm:px-4 py-2 sm:py-3',
                      'font-mono text-sm sm:text-lg font-semibold',
                      'transition-all duration-300',
                      'min-w-[2rem] text-center',
                      {
                        'bg-red-500 text-white': isDelete,
                        'bg-purple-500 text-white': isInsert,
                        'bg-green-500 text-white': isHead && !isOperation,
                        'bg-blue-500 text-white': !isHead && !isOperation,
                      }
                    )}
                  >
                    {node.value}
                  </div>

                  <div
                    className={clsx(
                      'px-2 sm:px-3 py-2 sm:py-3',
                      'border-l-2 font-mono text-xs sm:text-sm',
                      'transition-all duration-300',
                      {
                        'bg-red-100 border-red-300': isDelete,
                        'bg-purple-100 border-purple-300': isInsert,
                        'bg-green-100 border-green-300':
                          isHead && !isOperation,
                        'bg-blue-100 border-blue-300':
                          !isHead && !isOperation,
                      }
                    )}
                  >
                    {node.next !== null ? '→' : 'null'}
                  </div>
                </div>

                {node.next !== null && (
                  <div className="text-lg sm:text-2xl text-gray-400">→</div>
                )}

                {node.next === null && (
                  <div
                    className={clsx(
                      'px-2 sm:px-3 py-1 sm:py-2',
                      'bg-gray-200 border-2 border-gray-300',
                      'rounded text-xs sm:text-sm',
                      'font-mono text-gray-600'
                    )}
                  >
                    null
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-gray-500 italic">
          Empty list (head → null)
        </div>
      )}

      <div className="text-xs text-gray-500">
        Each node contains: [value | next pointer]
      </div>
    </div>
  );
};
