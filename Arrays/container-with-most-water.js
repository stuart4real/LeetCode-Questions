// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 

// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 

// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    
    var result = 0,
    left = 0,
    right = height.length - 1;

    while (left < right) {
        // pick the smaller side
        var smallestSide = Math.min(height[left], height[right]);
        var area = (right - left) * smallestSide;

        if (area > result) result = area;
        
        // converge towards middle point
        if (height[left] < height[right]) left++;
        else right--;
    }

    return result;
};