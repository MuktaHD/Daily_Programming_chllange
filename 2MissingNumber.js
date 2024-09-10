// Q 2. Find the missing number
// You are given an array arr containing n-1 distinct integers. The array consists of integers taken from the range 1 to n, meaning one integer is missing from this sequence. Your task is to find the missing integer.

// Input :
// An integer array arr of size n-1 where the elements are distinct and taken from the range 1 to n.
// Example : arr = [1, 2, 4, 5]

// Output :
// Return the missing integer from the array.
// Example: Missing Number : 3

function MissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
  
   
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
    }
  
    return expectedSum - actualSum;
  }
  const  arr = [1, 2, 4, 5];

  console.log("Missing Number :",MissingNumber(arr));