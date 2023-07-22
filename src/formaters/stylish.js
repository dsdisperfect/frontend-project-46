import _ from 'lodash';

const indents = (depth) => {
  if (depth < 1) return '';
  const space = ' ';
  const spaceCounter = 4;
  return space.repeat(spaceCounter * depth - 2);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) return `${data}`;

  const entries = Object.entries(data);
  const result = entries.map(([key, value]) => `${indents(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  const format = ['{', ...result, `${indents(depth)}  }`].join('\n');
  return format;
};

const iter = (nodes, depth = 1) => {
  const result = nodes.map((node) => {
    if (node.type === 'added') return `${indents(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;

    if (node.type === 'deleted') return `${indents(depth)}- ${node.key}: ${stringify(node.value, depth)}`;

    if (node.type === 'nested') return  `${indents(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('\n')}\n${indents(depth)}  }`;

    if (node.type === 'unchanged') return `${indents(depth)}  ${node.key}: ${stringify(node.value, depth)}`;

    if (node.type === 'changed') {
      const outputDeleted = `${indents(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}`;
      const outputAdded = `${indents(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`;
      return `${outputDeleted}\n${outputAdded}`;
    }
  });
  return result;
};

const stylish = (tree, depth = 1) => ['{', ...iter(tree, depth), '}'].join('\n');

export default stylish;
