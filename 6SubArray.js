// Find All Subarrays with Zero Sum
// You are given an integer array arr of size n. Your task is to find all the subarrays whose elements sum up to zero. A subarray is defined as a contiguous part of the array, and you must return the starting and ending indices of each subarray.

// Input :
// An integer array arr of size n where n represents the number of elements in the array.
// Example : 
// Input: [1, 2, -3, 3, -1, 2]

// Output :
// - Return a list of tuples, where each tuple contains two integers. The starting index (0-based) of the subarray. The ending index (0-based) of the subarray.
// - The output should list all subarrays that sum to zero. If no such subarrays are found, return an empty list.
// Example
// Output: [(0, 2), (2, 3)]

  

function SubArray(arr) {
    const prefixSums = new Map();
    prefixSums.set(0, -1); // first with 0 as the sum and -1 as the index
    let sum = 0;
    const subarrays = [];
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (prefixSums.has(sum)) {
        const startIndex = prefixSums.get(sum);
        subarrays.push([startIndex + 1, i]);
      }
  
      prefixSums.set(sum, i);
    }
  
    return subarrays;
  }

  const arr = [1, 2, -3, 3, -1, 2];
const subarrays = SubArray(arr);
console.log(subarrays); 