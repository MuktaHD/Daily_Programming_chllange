//Q 17. Prime Factorization of a Number
// Given a positive integer N, your task is to find its prime factorization. Return a list of prime numbers that multiply together to give N. If N is prime, the output should be a list containing only N.

// Input : N = 18

// Output : [2, 3, 3]



function primeFact(n) {
    let result = [];
    let i = 2;
  
    while (n % i === 0) {
      result.push(i);
      n = Math.floor(n / i);
    }
  
   
    i = 3;
    while (i * i <= n) {
      while (n % i === 0) {
        result.push(i);
        n = Math.floor(n / i);
      }
      i += 2; 
    }
  
    if (n > 1) {
      result.push(n);
    }
  
    return result;
  }
  

  console.log("Output:",primeFact(18)); // [2, 3, 3]
  console.log("Output:",primeFact(30)); // [2, 3, 5]
  console.log("Output:",primeFact(49)); // [7, 7]
  console.log("Output:",primeFact(19)); // [19]
  console.log("Output:",primeFact(64)); // [2, 2, 2, 2, 2, 2]
  console.log("Output:",primeFact(123456)); // [2, 2, 2, 2, 2, 3, 643]
  