oddOnesOut([1, 2, 3, 1, 3, 3])
function oddOnesOut(nums) {
    return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
    
  }

