/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  for (i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return (n !== 0) ? n : n + 1;
}
