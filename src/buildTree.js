import _ from 'lodash';

const buildTree = (file1, file2) => {
  const unSortedKeys = _.union(_.keys(file1), _.keys(file2));
  const keys = _.sortBy(unSortedKeys);
  return keys.map((key) => {
    if (!_.has(file1, key)) return { key, value: file2[key], type: 'added' };
    if (!_.has(file2, key)) return { key, value: file1[key], type: 'deleted' };
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      const children = buildTree(file1[key], file2[key]);
      return { key, children, type: 'nested' };
    }
    if (_.isEqual(file1[key], file2[key])) return { key, value: file1[key], type: 'unchanged' };
    return {
      key,
      oldValue: file1[key],
      newValue: file2[key],
      type: 'changed',
    };
  });
};

export default buildTree;
