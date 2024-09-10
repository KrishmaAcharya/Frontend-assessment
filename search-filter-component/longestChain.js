function longestChain(arr) {
    const numSet = new Set(arr);
    let longest = 0;
  
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentLength += 1;
        }
  
        longest = Math.max(longest, currentLength);
      }
    }
  
    return longest;
  }
  
  console.log(longestChain([100, 4, 200, 1, 3, 2])); // Output: 4
  