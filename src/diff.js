import _ from 'lodash';

const compare = (file1, file2) => {
  const keys = [Object.keys(file1), Object.keys(file2)].flat();
  const result = [];

  keys.forEach((key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        result.push(`   ${key}:${file1[key]}`);
      } else {
        result.push(` - ${key}:${file1[key]}`);
        result.push(` + ${key}:${file2[key]}`);
      }
    } else if (_.has(file1, key)) {
      result.push(` - ${key}:${file1[key]}`);
    } else if (_.has(file2, key)) {
      result.push(` + ${key}:${file2[key]}`);
    }
  });

  return _.uniq(result).sort((a, b) => {
    if (a[3] < b[3]) return -1;
    return 1;
  });
};

export default compare;
