// Sliding Window Maximum
// You are given an array of integers arr and a positive integer k. Your task is to find the maximum element in each sliding window of size k. The window slides from left to right, one element at a time, and you need to return the maximum element for each of these windows.

// Input : arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3

// Output : [3, 3, 5, 5, 6, 7]

//In that using deque i.e double ended queue..
function slidingWindow(arr, k) {
  
    if (arr.length === 0 || k === 0) return [];
    
  
    const deque = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
    
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}

console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); 
console.log(slidingWindow([1, 5, 3, 2, 4, 6], 3));         
console.log(slidingWindow([1, 2, 3, 4], 2));              
console.log(slidingWindow([7, 7, 7, 7], 1));              
