import { readFileSync } from 'fs';
import path, { resolve } from 'path';
import process from 'process';
import compare from './compare.js';
import parse from './parsers.js';

const genDiff = (fileName1, fileName2) => {
  const pathToFile1 = resolve(process.cwd(), '__fixtures__', fileName1);
  const pathToFile2 = resolve(process.cwd(), '__fixtures__', fileName2);

  const file1 = parse(readFileSync(pathToFile1), path.extname(fileName1));
  const file2 = parse(readFileSync(pathToFile2), path.extname(fileName2));

  return compare(file1, file2).join('\n');
};

export default genDiff;
