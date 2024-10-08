// Fibonacci Sequence using Dynamic Programming
// You are given an integer n. Your task is to calculate the n-th Fibonacci number using Dynamic Programming.

// Input : 5

// Output : 5



function fibonacci(n) {
   
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    
    let newArray = new Array(n + 1);
    newArray[0] = 0;
    newArray[1] = 1;

    for (let i = 2; i <= n; i++) {
        newArray[i] = newArray[i - 1] + newArray[i - 2];
    }

  
    return newArray[n];
}

console.log(fibonacci(5));   
console.log(fibonacci(10)); 
console.log(fibonacci(0));   
console.log(fibonacci(1000)); 
