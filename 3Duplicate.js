// Q3.Find the duplicate number
// You are given an array arr containing n+1 integers, where each integer is in the range [1, n] inclusive. There is exactly one duplicate number in the array, but it may appear more than once. Your task is to find the duplicate number without modifying the array and using constant extra space.
// Input :
// An integer array arr of size n+1, where each element is an integer in the range [1, n].
// Example : arr = [3, 1, 3, 4, 2]

// Output :
// Return the duplicate integer present in the array.
// Example: Duplicate Number : 3



function Duplicate(arr) {
    
    let n1= arr[0];
    let n2 = arr[0];
    do {
        n1= arr[n1];
        n2 = arr[arr[n2]];
    } while (n1!== n2);

    
    let ptr1 = arr[0];
    let ptr2 = n1;

    while (ptr1 !== ptr2) {
        ptr1 = arr[ptr1];
        ptr2 = arr[ptr2];
    }

    return ptr1; 
}

const arr = [3, 1, 3, 4, 2];
console.log("Duplicate Number : ",Duplicate(arr)); 
