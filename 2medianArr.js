// You are given an unsorted array of integers. Your task is to find the median of the array. The median is the middle value in an ordered list of numbers. If the list has an even number of elements, the median is the average of the two middle numbers.

// Implement a function that returns the median of the array without explicitly sorting the entire array.  Example arr=[3,2,1,4,5]  outpu=3 ,arr=[7,10,4,3,20,15] output=8.5


function quickSelect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = partition(arr, left, right);
    
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

function findMedian(arr) {
    const n = arr.length;
    const mid = Math.floor(n / 2);

    if (n % 2 === 1) {
        return quickSelect(arr, 0, n - 1, mid);
    } else {
        const leftMid = quickSelect(arr, 0, n - 1, mid - 1);
        const rightMid = quickSelect(arr, 0, n - 1, mid);
        return (leftMid + rightMid) / 2;
    }
}

// Example usage:
const arr1 = [3, 2, 1, 4, 5];
const arr2 = [7, 10, 4, 3, 20, 15];

console.log(findMedian(arr1)); // Output: 3
console.log(findMedian(arr2)); // Output: 8.5
