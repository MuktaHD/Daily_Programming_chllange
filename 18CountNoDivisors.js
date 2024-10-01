// Count the Number of Divisors of a Number

// Given a positive integer N, your task is to find the total number of divisors (factors) of N. A divisor of N is any integer that divides N without leaving a remainder.
// A divisor of a number is any integer that divides the number evenly (i.e., without a remainder). For example, for N = 12, its divisors are 1, 2, 3, 4, 6, 12, so the total number of divisors is 6.

// Input:
// A single integer N, where 1≤N≤109

// Output:
// An integer representing the total number of divisors of N.

// Examples:
// Example 1
// Input: N = 12
// Output: 6
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, and 12.

// Constraints:
// 1≤N≤109
// The time complexity should be efficient enough to handle large values of N.

// Test Cases:
// Input: N = 18
// Output: 6
// Input: N = 29
// Output: 2
// Input: N = 100
// Output: 9
// Input: N = 1
// Output: 1
// Input: N = 997
// Output: 2


// Edge Cases:
// N is 1: The only divisor of 1 is itself, so the output should be 1.
// N is a prime number: If N is prime, the divisors are 1 and N itself, so the output should be 2.
// N is a perfect square: For numbers like 36, where the square root (6) appears as a divisor, ensure that it is counted only once.
// N is very large: Ensure the algorithm efficiently handles large numbers up to 109


function countDivisors(n) {
    let count = 0;
    
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            
            count++; 
            if (i !== n / i) {
                count++; 
            }
        }
    }
    
    return count;
}


console.log(countDivisors(12));  // Output: 6
console.log(countDivisors(18));  // Output: 6
console.log(countDivisors(29));  // Output: 2
console.log(countDivisors(100)); // Output: 9
console.log(countDivisors(1));   // Output: 1
console.log(countDivisors(997)); // Output: 2
