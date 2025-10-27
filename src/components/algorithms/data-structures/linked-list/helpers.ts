import type { BaseStep, DataStructureConfig } from '../types';
import { DEFAULT_CONFIG } from '../types';

export interface Node {
  id: string;
  value: number;
  next: string | null;
}

export interface LinkedListStep extends BaseStep {
  nodesMap: Map<string, Node>;
  head: string | null;
  operation: 'insert' | 'delete' | 'search' | 'idle';
  currentNode: string | null;
  operationValue?: number;
}

export const generateRandomData = (
  config: DataStructureConfig = {}
): Map<string, Node> => {
  const { initialSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const listSize = Math.floor(Math.random() * initialSize) + 3;
  const nodesMap = new Map<string, Node>();
  const nodeIds: string[] = [];

  for (let i = 0; i < listSize; i++) {
    const id = `node-${Date.now()}-${i}`;
    const value =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
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

export const cloneNodesMap = (
  nodesMap: Map<string, Node>
): Map<string, Node> => {
  const cloned = new Map<string, Node>();
  nodesMap.forEach((node, id) => {
    cloned.set(id, { ...node });
  });
  return cloned;
};

export const getListSize = (
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

export const generateSteps = (
  initialList: Map<string, Node>,
  config: DataStructureConfig = {}
): LinkedListStep[] => {
  const { minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const steps: LinkedListStep[] = [];
  const nodesMap = cloneNodesMap(initialList);

  const firstNodeId = Array.from(nodesMap.keys())[0];
  let head = firstNodeId || null;

  steps.push({
    nodesMap: cloneNodesMap(nodesMap),
    head,
    operation: 'idle',
    currentNode: null,
    highlightedLine: 0,
  });

  const operations = Math.floor(Math.random() * 4) + 4;

  for (let i = 0; i < operations; i++) {
    const opType = Math.random();
    const listSize = getListSize(nodesMap, head);

    if (opType < 0.4 && listSize < 8) {
      const value =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
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
        highlightedLine: 13,
      });

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: newNodeId,
        operationValue: value,
        highlightedLine: 14,
      });

      head = newNodeId;
      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: newNodeId,
        operationValue: value,
        highlightedLine: 15,
      });

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        highlightedLine: 0,
      });
    } else if (opType < 0.7 && listSize < 8) {
      const value =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
        highlightedLine: 18,
      });

      const newNodeId = `node-${Date.now()}-${i}-insert`;

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'insert',
        currentNode: null,
        operationValue: value,
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
          highlightedLine: 28,
        });
      }

      steps.push({
        nodesMap: cloneNodesMap(nodesMap),
        head,
        operation: 'idle',
        currentNode: null,
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
        highlightedLine: 31,
      });

      if (head !== null && head === randomNodeId) {
        steps.push({
          nodesMap: cloneNodesMap(nodesMap),
          head,
          operation: 'delete',
          currentNode: head,
          operationValue: valueToDelete,
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
        highlightedLine: 0,
      });
    }
  }

  return steps;
};
