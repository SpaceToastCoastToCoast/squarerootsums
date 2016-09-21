const chai = require('chai');
const expect = chai.expect;
const squareRootSums = require('../squarerootsums.js');

describe('square root sums', function() {
  it('should return the sum of the square root of every number from 1 to the argument supplied', function() {
    expect(squareRootSums).to.be.a('function');
    expect(squareRootSums(1)).to.be.a('number');
    expect(squareRootSums(1)).to.equal(1);
    expect(squareRootSums(2)).to.be.within(2.414, 2.415);
    expect(squareRootSums(4)).to.be.within(6.146, 6.147);
  });
  it('should handle invalid input gracefully', function() {
    expect(squareRootSums(0)).to.equal(0);
    expect(squareRootSums.bind(null, -1)).to.throw(RangeError);
    expect(squareRootSums.bind(null, '4')).to.throw(TypeError);
  });
});