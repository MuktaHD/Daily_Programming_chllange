// First Element to Repeat k Times
// You are given an array of integers and an integer k. Your task is to find the first element in the array that appears exactly k times. If no such element exists, return -1.

// Input : arr = [3, 1, 4, 4, 5, 2, 6, 1, 4], k = 2

// Output : 1

function firstElementToRepeatKTimes(arr, k) {
    let frequencyMap = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }


    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap[arr[i]] === k) {
            return arr[i];  
        }
    }

    return -1;
}


console.log(firstElementToRepeatKTimes([3, 1, 4, 4, 5, 2, 6, 1, 4], 2));
console.log(firstElementToRepeatKTimes([2, 3, 4, 2, 2, 5, 5], 2));       
console.log(firstElementToRepeatKTimes([1, 1, 1, 1], 1));                
console.log(firstElementToRepeatKTimes([10], 1));                     
console.log(firstElementToRepeatKTimes([6, 6, 6, 6, 7, 7, 8, 8, 8], 3)); 
