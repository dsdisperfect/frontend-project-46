import { readFileSync } from 'fs';
import path, { resolve } from 'path';
import process from 'process';
import buildTree from './buildTree.js';
import parse from './parsers.js';
import formatter from './formaters/formatters.js';

const genDiff = (fileName1, fileName2, format) => {
  const pathToFile1 = resolve(process.cwd(), fileName1);
  const pathToFile2 = resolve(process.cwd(), fileName2);

  const file1 = parse(readFileSync(pathToFile1), path.extname(fileName1));
  const file2 = parse(readFileSync(pathToFile2), path.extname(fileName2));

  return formatter(buildTree(file1, file2), format);
};

export default genDiff;
