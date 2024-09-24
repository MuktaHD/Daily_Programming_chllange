// Q 16.LCM (Least Common Multiple) of Two Numbers
// You are given two integers, N and M. Your task is to find the Least Common Multiple (LCM) of these two numbers. The LCM of two integers is the smallest positive integer that is divisible by both N and M.

// Input : N = 4, M = 6

// Output : 12


function gcd(a, b) {
  
    while (b !== 0) {
        let temp = b;
        b = a % b; 
        a = temp;  
    }
    return a; 
}

function lcm(n, m) {
   
    return (n * m) / gcd(n, m);
}

console.log("Output:",lcm(4, 6)); 
console.log("Output:",lcm(5, 10));
console.log("Output:",lcm(7, 3)); 
console.log("Output:",lcm(1, 987654321)); 
console.log("Output:",lcm(123456, 789012)); 
