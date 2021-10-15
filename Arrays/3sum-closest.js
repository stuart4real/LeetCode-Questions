// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    // sort the array 
    nums.sort(function(a, b) {
        return a - b;
    });
    
    var closest = Infinity;
    
    // iterate through the array
    for (var i = 0; i < nums.length - 2; i++) {
        var left = i+1; right = nums.length-1;
        
        while (left < right) {
            var localSum = nums[i] + nums[left] + nums[right];
            
            if (Math.abs(localSum - target) < Math.abs(closest - target)) closest = localSum;
            
            if (localSum > target) right--;
            
            else left++;
        }
    }
    
    return closest;
};