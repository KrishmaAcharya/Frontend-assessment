// countSmaller.js

/**
 * Function to return an array where counts[i] is the number of smaller elements to the right of nums[i].
 * @param {number[]} nums - The input array of integers.
 * @return {number[]} The counts array.
 */
function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
  
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++;
        }
      }
      counts[i] = count;
    }
  
    return counts;
  }
  
  // Export the function if needed for other modules
  module.exports = countSmaller;
  