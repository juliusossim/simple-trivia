/**
 * checks numb is odd
 * @param {number} numb
 * @returns {boolean}
 */

export const oddChecker = (numb) => {
  switch (numb) {
  case 0:
    return false;
  case 1:
    return false;
  default:
    return numb % 2 !== 0;
  }
};

export const formatSpecialChars = (text) => text
  .replace(/&quot;/g, '\"')
  .replace(/&quot;/g, '\"');
