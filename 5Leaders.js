// Q 5.Find the Leaders in an Array
// You are given an integer array arr of size n. An element is considered a leader if it is greater than all the elements to its right. Your task is to find all such leader elements in the array.

// Input :
// An integer array arr of size n.
// Example : 
// arr = [16, 17, 4, 3, 5, 2]

// Output :
// Return an array containing all the leader elements in the order in which they appear in the original array.
// Example:
// Leaders: [17, 5, 2]



function Leaders(arr) {
  
    let leaders = [];
    
    let currentMax = arr[arr.length - 1];
    leaders.push(currentMax);  

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= currentMax) {
            leaders.push(arr[i]);
            currentMax= arr[i]; 
        }
    }

    
    return leaders.reverse();
}

// Example usage:
let arr = [16, 17, 4, 3, 5, 2];
let leaders = Leaders(arr);
console.log("Leaders: ", leaders);
