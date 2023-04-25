import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const getFixtureFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixtureFile(filename), 'utf-8');

describe('test', () => {
    test('test function', () => {
        const file1 = getFixtureFile('file1.json');
        const file2 = getFixtureFile('file2.json');
        expect(genDiff(file1, file2)).toBe(readFile('result.txt'));
    });
});
