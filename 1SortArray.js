// Q1.Sort an Array of 0s, 1s, and 2s
// You are given an array arr consisting only of 0s, 1s, and 2s. The task is to sort the array in increasing order in linear time (i.e., O(n)) without using any extra space. This means you need to rearrange the array in-place.

// Input :
// An integer array arr of size n where each element is either 0, 1, or 2.
// Example : arr = [0, 1, 2, 1, 0, 2, 1, 0]

// Output :
// The sorted array, arranged in increasing order of 0s, 1s, and 2s.
// Example: [0, 0, 0, 1, 1, 1, 2, 2]


function sortArray(arr) {
    let l = 0; //l is  low 
    let m = 0; // m is mid
    let h = arr.length - 1; // h is high 
  
    while (m <= h) {
      if (arr[m] === 0) {
        
        [arr[l], arr[m]] = [arr[m], arr[l]]; //  swap l and m array
        l++;
        m++;
      } else if (arr[m] === 2) {
      
        [arr[m], arr[h]] = [arr[h], arr[m]]; // swap m and h arr
        h--;
      } else {
       
        m++; //  arr m is 1 then move to next element.
      }
    }
  
    return arr;
  }
  
  const arr = [0, 1, 2, 1, 0, 2, 1, 0];
  const sortedArr = sortArray(arr);

  console.log(sortedArr); 


 