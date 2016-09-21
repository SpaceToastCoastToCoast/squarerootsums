module.exports = function(number) {
  var sum = 0;
  for(var i = 0; i <= number; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
};