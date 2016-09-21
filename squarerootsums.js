module.exports = function(number) {
  return new Array(number)
  .fill(0)
  .map(function(element, index) {
    return Math.sqrt(parseInt(index) + 1);
  })
  .reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
};