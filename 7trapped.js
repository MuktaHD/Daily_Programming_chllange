// Trapping Rain Water
// You are given an array height[] of non-negative integers where each element represents the height of a bar in a histogram-like structure. These bars are placed next to each other, and the width of each bar is 1 unit. When it rains, water gets trapped between the bars if there are taller bars on both the left and right of the shorter bars. The task is to calculate how much water can be trapped between these bars after the rain.

// Input :
// An integer array height[] where each element represents the height of a bar in the histogram.
// Example : 
// height[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// Output :
// * An integer representing the total units of water that can be trapped between the bars.
// Example
// Output: 6



function trapped(heights) {
    let left = 0; 
    let right = heights.length - 1; 
    let maxLeft = 0; 
    let maxRight = 0; 
    let water = 0; 

    while (left < right) {
        if (heights[left] < heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left]; 
            } else {
                water += maxLeft - heights[left]; 
            }
            left++; 
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right]; 
            } else {
                water += maxRight - heights[right]; 
            }
            right--; 
        }
    }

    return water; 
}


const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Output:",trapped(heights)); 
