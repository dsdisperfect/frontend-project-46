import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) return '[complex value]';
  if (_.isString(value)) return `'${value}'`;
  return value;
};

const plain = (data, path = '') => {
  const result = data.map((node) => {
    const property = [path, node.key].filter(Boolean).join('.');

    switch (node.type) {
      case 'nested':
        return plain(node.children, property);
      case 'added':
        return `Property '${property}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${property}' was removed`;
      case 'changed':
        return `Property '${property}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
      default:
        return '';
    }
  });
  return result.flat().filter(Boolean).join('\n');
};

export default plain;
