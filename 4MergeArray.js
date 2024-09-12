// Q 4.Merge Two Sorted Arrays
// You are given two sorted arrays arr1 of size m and arr2 of size n. Your task is to merge these two arrays into a single sorted array without using any extra space (i.e., in-place merging). The elements in arr1 should be merged first, followed by the elements of arr2, resulting in both arrays being sorted after the merge.

// Input :
// Two sorted integer arrays arr1 of size m and arr2 of size n.
// Example : 
// arr1 = [1, 3, 5, 7]
// arr2 = [2, 4, 6, 8]

// Output :
// Both arr1 and arr2 should be sorted after the merge. Since you cannot use extra space, the final result will be reflected in arr1 and arr2.
// Example:
// arr1 = [1, 2, 3, 4]
// arr2 = [5, 6, 7, 8]




function mergeArrays(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    
    for (let i = m - 1, j = 0; i >= 0 && j < n; i--, j++) {
      
      if (arr1[i] > arr2[j])    // If arr1[i] is greater than arr2[j], swap them
         {
        [arr1[i], arr2[j]] = [arr2[j], arr1[i]]; // Swap 
      }
    }
  
    
    arr1.sort((a, b) => a - b); // Sort both arrays after swapping
    arr2.sort((a, b) => a - b);
  }
  
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  
  mergeArrays(arr1, arr2);
  
  console.log('arr1:', arr1); 
  console.log('arr2:', arr2); 
  