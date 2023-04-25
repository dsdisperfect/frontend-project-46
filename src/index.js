import { readFileSync } from 'fs';
import { resolve } from 'path';
import process from 'process';
import compare from './compare.js';

const genDiff = (fileName1, fileName2) => {
  const pathToFile1 = resolve(process.cwd(), '__fixtures__', fileName1);
  const file1 = JSON.parse(readFileSync(pathToFile1));

  const pathToFile2 = resolve(process.cwd(), '__fixtures__', fileName2);
  const file2 = JSON.parse(readFileSync(pathToFile2));

  return compare(file1, file2).join('\n');
};

export default genDiff;
