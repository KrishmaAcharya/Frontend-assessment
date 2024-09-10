// countSmaller.test.js

const countSmaller = require('./CountSmaller');

test('should return correct counts array', () => {
  expect(countSmaller([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
  expect(countSmaller([1, 1, 1, 1])).toEqual([0, 0, 0, 0]);
  expect(countSmaller([10, 5, 8, 7, 6])).toEqual([4, 1, 2, 1, 0]);
});
