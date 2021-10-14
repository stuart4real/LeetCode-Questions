// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 

// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

    if (nums.length < 3) return [];
    
    var ans = [];
    
    // sort the array
    nums = nums.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < nums.length -2; i++) {
        if (nums[i] > 0) {
            return ans;
        }

        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        // let j and k converge to the middle point
        for (var j = i + 1, k = nums.length - 1; j < k;) {

            if (nums[i] + nums[j] + nums[k] === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return ans;
};