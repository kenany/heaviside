/**
 * @param {number} n
 * @returns {number}
 */
function heaviside(n) {
  return +(n >= 0);
}

module.exports = heaviside;
