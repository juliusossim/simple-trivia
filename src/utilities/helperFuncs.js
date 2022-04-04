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
    return isPrime(numb);
  }
};
export const isPrime = (numb) => numb % 2 !== 0;
