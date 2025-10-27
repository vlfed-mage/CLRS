import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { DataStructureVisualizer } from '@/components/Visualizer';
import type { LegendItem } from '@/components/Visualizer';
import { useVisualizerControls } from '@/hooks/useVisualizerControls';

interface Node {
  id: string;
  value: number;
  next: string | null;
}

interface LinkedListStep {
  nodesMap: Map<string, Node>;
  head: string | null;
  operation: 'insert' | 'delete' | 'search' | 'idle';
  currentNode: string | null;
  operationValue?: number;
  sorted: boolean;
  highlightedLine: number;
}

const CODE_LINES = [
  'class Node {',
  '  constructor(value) {',
  '    this.value = value;',
  '    this.next = null;',
  '  }',
  '}',
  '',
  'class LinkedList {',
  '  constructor() {',
  '    this.head = null;',
  '  }',
  '',
  '  insertAtBeginning(value) {',
  '    const newNode = new Node(value);',
  '    newNode.next = this.head;',
  '    this.head = newNode;',
  '  }',
  '',
  '  insertAtEnd(value) {',
  '    const newNode = new Node(value);',
  '    if (!this.head) {',
  '      this.head = newNode;',
  '      return;',
  '    }',
  '    let current = this.head;',
  '    while (current.next) {',
  '      current = current.next;',
  '    }',
  '    current.next = newNode;',
  '  }',
  '',
  '  delete(value) {',
  '    if (!this.head) return;',
  '    if (this.head.value === value) {',
  '      this.head = this.head.next;',
  '      return;',
  '    }',
  '    let current = this.head;',
  '    while (current.next && current.next.value !== value) {',
  '      current = current.next;',
  '    }',
  '    if (current.next) {',
  '      current.next = current.next.next;',
  '    }',
  '  }',
  '',
  '  search(value) {',
  '    let current = this.head;',
  '    while (current) {',
  '      if (current.value === value) {',
  '        return current;',
  '      }',
  '      current = current.next;',
  '    }',
  '    return null;',
  '  }',
  '}',
];

const LEGEND_ITEMS: LegendItem[] = [
  { color: 'bg-blue-500', label: 'Node' },
  { color: 'bg-green-500', label: 'Head' },
  { color: 'bg-purple-500', label: 'Current Operation' },
  { color: 'bg-red-500', label: 'Deleting' },
];

const generateRandomList = (size = 5): Map<string, Node> => {
  const listSize = Math.floor(Math.random() * size) + 3;
  const nodesMap = new Map<string, Node>();
  const nodeIds: string[] = [];

  for (let i = 0; i < listSize; i++) {
    const id = `node-${Date.now()}-${i}`;
    const value = Math.floor(Math.random() * 99) + 1;
    nodeIds.push(id);

    nodesMap.set(id, {
      id,
      value,
      next: null,
    });
  }

  for (let i = 0; i < nodeIds.length - 1; i++) {
    const currentNode = nodesMap.get(nodeIds[i]);
    if (currentNode) {
      currentNode.next = nodeIds[i + 1];
    }
  }

  return nodesMap;
};

const cloneNodesMap = (nodesMap: Map<string, Node>): Map<string, Node> => {
  const cloned = new Map<string, Node>();
  nodesMap.forEach((node, id) => {
    cloned.set(id, { ...node });
  });
  return cloned;
};

const getListSize = (
  nodesMap: Map<string, Node>,
  head: string | null
): number => {
  let count = 0;
  let current = head;
  while (current !== null) {
    count++;
    const node = nodesMap.get(current);
    if (!node) break;
    current = node.next;
  }
  return count;
};

const generateSteps = (
  initialList: Map<string, Node>
): LinkedListStep[] => {
  const steps: LinkedListStep[] = [];
  const nodesMap = cloneNodesMap(initialList);

  const firstNodeId = Array.from(nodesMap.keys())[0];
  let head = firstNodeId || null;

  steps.push({
    nodesMap: cloneNodesMap(nodesMap),
    head,
    operation: 'idle',
    currentNode: null,
    sorted: false,
    highlightedLine: 0,
  });

  const operations = Math.floor(Math.random() * 4) + 4;

  for (let i = 0; i < operations; i++) {
    const opType = Math.random();
    const listSize = getListSize(nodesMap, head);

    if (opType < 0.4 && listSize < 8) {
      const value = Math.floor(Math.random() * 99) + 1;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        sorted: false,
        highlightedLine: 12,
      });

      const newNodeId = `node-${Date.now()}-${i}-insert`;
      const newNode: Node = {
        id: newNodeId,
        value,
        next: head,
      };

      nodesMap.set(newNodeId, newNode);

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: newNodeId,
        operationValue: value,
        sorted: false,
        highlightedLine: 13,
      });

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: newNodeId,
        operationValue: value,
        sorted: false,
        highlightedLine: 14,
      });

      head = newNodeId;
      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: newNodeId,
        operationValue: value,
        sorted: false,
        highlightedLine: 15,
      });

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        sorted: false,
        highlightedLine: 0,
      });
    } else if (opType < 0.7 && listSize < 8) {
      const value = Math.floor(Math.random() * 99) + 1;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        sorted: false,
        highlightedLine: 18,
      });

      const newNodeId = `node-${Date.now()}-${i}-insert`;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: null,
        operationValue: value,
        sorted: false,
        highlightedLine: 19,
      });

      if (head === null) {
        const newNode: Node = {
          id: newNodeId,
          value,
          next: null,
        };
        nodesMap.set(newNodeId, newNode);
        head = newNodeId;

        steps.push({
          nodesMap: cloneNodesMap(nodesMap),
          head,
          operation: 'insert',
          currentNode: newNodeId,
          operationValue: value,
          sorted: false,
          highlightedLine: 21,
        });
      } else {
        let current = head;
        let currentNode = nodesMap.get(current);

        while (currentNode && currentNode.next !== null) {
          steps.push({
            nodesMap: cloneNodesMap(nodesMap),
            head,
            operation: 'insert',
            currentNode: current,
            operationValue: value,
            sorted: false,
            highlightedLine: 25,
          });
          current = currentNode.next;
          currentNode = nodesMap.get(current);
        }

        const newNode: Node = {
          id: newNodeId,
          value,
          next: null,
        };
        nodesMap.set(newNodeId, newNode);

        if (currentNode) {
          currentNode.next = newNodeId;
        }

        steps.push({
          nodesMap: cloneNodesMap(nodesMap),
          head,
          operation: 'insert',
          currentNode: newNodeId,
          operationValue: value,
          sorted: false,
          highlightedLine: 28,
        });
      }

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        sorted: false,
        highlightedLine: 0,
      });
    } else if (listSize > 1) {
      const nodeIds = Array.from(nodesMap.keys());
      const randomNodeId = nodeIds[Math.floor(Math.random() * nodeIds.length)];
      const nodeToDelete = nodesMap.get(randomNodeId);

      if (!nodeToDelete) continue;

      const valueToDelete = nodeToDelete.value;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        operationValue: valueToDelete,
        sorted: false,
        highlightedLine: 31,
      });

      if (head !== null && head === randomNodeId) {
        steps.push({
          nodesMap: cloneNodesMap(nodesMap),
          head,
          operation: 'delete',
          currentNode: head,
          operationValue: valueToDelete,
          sorted: false,
          highlightedLine: 33,
        });

        const headNode = nodesMap.get(head);
        const newHead = headNode ? headNode.next : null;
        nodesMap.delete(head);
        head = newHead;

        steps.push({
          nodesMap: cloneNodesMap(nodesMap),
          head,
          operation: 'delete',
          currentNode: null,
          operationValue: valueToDelete,
          sorted: false,
          highlightedLine: 34,
        });
      } else if (head !== null) {
        let current = head;
        let currentNode = nodesMap.get(current);
        let found = false;

        while (currentNode && currentNode.next !== null && !found) {
          steps.push({
            nodesMap: cloneNodesMap(nodesMap),
            head,
            operation: 'delete',
            currentNode: current,
            operationValue: valueToDelete,
            sorted: false,
            highlightedLine: 38,
          });

          const nextNode = nodesMap.get(currentNode.next);
          if (nextNode && nextNode.value === valueToDelete) {
            found = true;
            const nodeToDeleteId = currentNode.next;

            steps.push({
              nodesMap: cloneNodesMap(nodesMap),
              head,
              operation: 'delete',
              currentNode: nodeToDeleteId,
              operationValue: valueToDelete,
              sorted: false,
              highlightedLine: 41,
            });

            const deletedNode = nodesMap.get(nodeToDeleteId);
            currentNode.next = deletedNode ? deletedNode.next : null;
            nodesMap.delete(nodeToDeleteId);

            steps.push({
              nodesMap: cloneNodesMap(nodesMap),
              head,
              operation: 'delete',
              currentNode: null,
              operationValue: valueToDelete,
              sorted: false,
              highlightedLine: 42,
            });
          } else {
            current = currentNode.next;
            currentNode = nodesMap.get(current);
          }
        }
      }

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        sorted: false,
        highlightedLine: 0,
      });
    }
  }

  return steps;
};

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

export const LinkedListVisualizer = () => {
  const [steps, setSteps] = useState<LinkedListStep[]>([]);

  const generateNewList = (): void => {
    const newList = generateRandomList();
    const newSteps = generateSteps(newList);
    setSteps(newSteps);
  };

  useEffect(() => {
    generateNewList();
  }, []);

  const controls = useVisualizerControls(steps, {
    onGenerateArray: generateNewList,
  });

  const visualization = controls.currentStepData && (() => {
    const nodesInOrder = getNodesInOrder(
      controls.currentStepData.nodesMap,
      controls.currentStepData.head
    );

    return (
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold text-green-600">
            HEAD {controls.currentStepData.head !== null ? '→' : '→ null'}
          </div>
        </div>

        {nodesInOrder.length > 0 ? (
          <div
            className={clsx(
              'flex flex-wrap items-center justify-center',
              'gap-1 sm:gap-2 max-w-full'
            )}
          >
            {nodesInOrder.map((node) => {
              const isHead = node.id === controls.currentStepData.head;
              const isCurrent =
                node.id === controls.currentStepData.currentNode;
              const isOperation =
                isCurrent &&
                controls.currentStepData.operation !== 'idle';
              const isDelete =
                isOperation &&
                controls.currentStepData.operation === 'delete';
              const isInsert =
                isOperation &&
                controls.currentStepData.operation === 'insert';

              return (
                <div
                  key={node.id}
                  className={clsx(
                    'flex items-center',
                    'gap-1 sm:gap-2'
                  )}
                >
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
                          'bg-green-500 text-white':
                            isHead && !isOperation,
                          'bg-blue-500 text-white':
                            !isHead && !isOperation,
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
                    <div className="text-lg sm:text-2xl text-gray-400">
                      →
                    </div>
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
          <div className="text-gray-500 italic">Empty list (head → null)</div>
        )}

        <div className="text-xs text-gray-500">
          Each node contains: [value | next pointer]
        </div>
      </div>
    );
  })();

  const extraInfo = controls.currentStepData && (() => {
    const listSize = getListSize(
      controls.currentStepData.nodesMap,
      controls.currentStepData.head
    );

    const headNode = controls.currentStepData.head
      ? controls.currentStepData.nodesMap.get(
          controls.currentStepData.head
        )
      : null;

    const currentNode = controls.currentStepData.currentNode
      ? controls.currentStepData.nodesMap.get(
          controls.currentStepData.currentNode
        )
      : null;

    return (
      <div className="text-sm space-y-2">
        <div>
          <strong>Size:</strong> {listSize}
        </div>
        <div>
          <strong>Head:</strong>{' '}
          {controls.currentStepData.head !== null
            ? `${headNode?.value} (${controls.currentStepData.head.substring(
                0,
                8
              )}...)`
            : 'null'}
        </div>
        <div>
          <strong>Operation:</strong>{' '}
          {controls.currentStepData.operation === 'insert' && (
            <span className="text-purple-600">
              INSERT({controls.currentStepData.operationValue})
            </span>
          )}
          {controls.currentStepData.operation === 'delete' && (
            <span className="text-red-600">
              DELETE({controls.currentStepData.operationValue})
            </span>
          )}
          {controls.currentStepData.operation === 'search' && (
            <span className="text-blue-600">
              SEARCH({controls.currentStepData.operationValue})
            </span>
          )}
          {controls.currentStepData.operation === 'idle' && (
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
  })();

  return (
    <DataStructureVisualizer
      controls={controls}
      codeLines={CODE_LINES}
      legendItems={LEGEND_ITEMS}
      visualization={visualization}
      extraInfo={extraInfo}
    />
  );
};
