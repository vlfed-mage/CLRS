import type { BaseStep, DataStructureConfig } from '../types';
import { DEFAULT_CONFIG } from '../types';

export interface HashEntry {
  key: number;
  value: number;
}

export interface HashTableStep extends BaseStep {
  table: HashEntry[][];
  tableSize: number;
  operation: 'insert' | 'search' | 'delete' | 'idle';
  operationKey?: number;
  operationValue?: number;
  foundIndex?: number;
  collisionCount?: number;
}

const hashFunction = (key: number, tableSize: number): number => {
  return key % tableSize;
};

export const generateRandomData = (
  config: DataStructureConfig = {}
): HashEntry[][] => {
  const { initialSize, minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const tableSize = 7;
  const table: HashEntry[][] = Array.from({ length: tableSize }, () => []);

  const numEntries = Math.floor(Math.random() * initialSize) + 3;
  const usedKeys = new Set<number>();

  for (let i = 0; i < numEntries; i++) {
    let key: number;
    do {
      key = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    } while (usedKeys.has(key));

    usedKeys.add(key);
    const value = Math.floor(Math.random() * 100) + 1;
    const index = hashFunction(key, tableSize);
    table[index].push({ key, value });
  }

  return table;
};

export const generateSteps = (
  initialTable: HashEntry[][],
  config: DataStructureConfig = {}
): HashTableStep[] => {
  const { minValue, maxValue } = { ...DEFAULT_CONFIG, ...config };
  const steps: HashTableStep[] = [];
  const tableSize = initialTable.length;
  const currentTable: HashEntry[][] = initialTable.map(bucket => [...bucket]);

  steps.push({
    table: currentTable.map(bucket => [...bucket]),
    tableSize,
    operation: 'idle',
    highlightedLine: 0,
  });

  const operations = Math.floor(Math.random() * 6) + 6;
  const existingKeys: number[] = [];
  currentTable.forEach(bucket => {
    bucket.forEach(entry => existingKeys.push(entry.key));
  });

  for (let i = 0; i < operations; i++) {
    const operationType = Math.random();

    if (operationType < 0.5 && currentTable.flat().length < tableSize * 3) {
      let key: number;
      do {
        key = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      } while (existingKeys.includes(key));

      existingKeys.push(key);
      const value = Math.floor(Math.random() * 100) + 1;
      const index = hashFunction(key, tableSize);

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'idle',
        highlightedLine: 5,
      });

      const collisionCount = currentTable[index].length;

      currentTable[index].push({ key, value });
      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'insert',
        operationKey: key,
        operationValue: value,
        foundIndex: index,
        collisionCount,
        highlightedLine: 7,
      });

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'idle',
        highlightedLine: 0,
      });
    } else if (operationType < 0.75 && existingKeys.length > 0) {
      const key = existingKeys[Math.floor(Math.random() * existingKeys.length)];
      const index = hashFunction(key, tableSize);

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'idle',
        highlightedLine: 10,
      });

      const bucket = currentTable[index];
      const entryIndex = bucket.findIndex(entry => entry.key === key);
      const value = entryIndex >= 0 ? bucket[entryIndex].value : undefined;

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'search',
        operationKey: key,
        operationValue: value,
        foundIndex: index,
        highlightedLine: 11,
      });

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'idle',
        highlightedLine: 0,
      });
    } else if (existingKeys.length > 0) {
      const randomIndex = Math.floor(Math.random() * existingKeys.length);
      const keyToDelete = existingKeys[randomIndex];
      const index = hashFunction(keyToDelete, tableSize);

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'idle',
        highlightedLine: 17,
      });

      const bucket = currentTable[index];
      const entryIndex = bucket.findIndex(entry => entry.key === keyToDelete);

      if (entryIndex >= 0) {
        bucket.splice(entryIndex, 1);
        existingKeys.splice(existingKeys.indexOf(keyToDelete), 1);
      }

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'delete',
        operationKey: keyToDelete,
        foundIndex: index,
        highlightedLine: 21,
      });

      steps.push({
        table: currentTable.map(bucket => [...bucket]),
        tableSize,
        operation: 'idle',
        highlightedLine: 0,
      });
    }
  }

  return steps;
};
