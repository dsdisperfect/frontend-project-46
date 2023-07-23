import stylish from './stylish.js';

const formatter = (data, f = 'stylish') => {
  switch (f) {
    case 'stylish':
      return stylish(data);
    default: {
      throw new Error('Unknown format');
    }
  }
};

export default formatter;
