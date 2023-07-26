import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const getFixtureFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixtureFile(filename), 'utf-8');

const file1JSON = getFixtureFile('file1.json');
const file2JSON = getFixtureFile('file2.json');

const file1YML = getFixtureFile('file1.yml');
const file2YML = getFixtureFile('file2.yml');

describe('test sylish', () => {
  test('default', () => {
    expect(genDiff(file1JSON, file2JSON)).toBe(readFile('stylish.txt'));
    expect(genDiff(file1YML, file2YML)).toBe(readFile('stylish.txt'));
  });
  test('stylish', () => {
    expect(genDiff(file1JSON, file2JSON, 'stylish')).toBe(readFile('stylish.txt'));
    expect(genDiff(file1YML, file2YML, 'stylish')).toBe(readFile('stylish.txt'));
  });
  test('plain', () => {
    expect(genDiff(file1JSON, file2JSON, 'plain')).toBe(readFile('plain.txt'));
    expect(genDiff(file1YML, file2YML, 'plain')).toBe(readFile('plain.txt'));
  });
  test('json', () => {
    expect(genDiff(file1JSON, file2JSON, 'json')).toBe(readFile('json.txt'));
    expect(genDiff(file1YML, file2YML, 'json')).toBe(readFile('json.txt'));
  });
});
