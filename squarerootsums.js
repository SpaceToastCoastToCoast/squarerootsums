module.exports = function(number) {
  if(typeof number !== 'number' || number < 0) {
    throw new TypeError('input must be an integer greater than or equal to zero');
  }
  return new Array(number)
  .fill(0)
  .map(function(element, index) {
    return Math.sqrt(parseInt(index) + 1);
  })
  .reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
};