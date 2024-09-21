// Q 13. Longest Palindromic Substring
// You are given a string s. Your task is to find and return the longest palindromic substring within the given string. A palindrome is a string that reads the same forwards and backwards.

// Input : "babad"

// Output : "bab"



function longestPalindrome(s) {
    if (s.length < 1) {
      return "";
    }
  
    let start = 0;
    let maxLength = 1;
  
    for (let i = 0; i < s.length; i++) {
     
      let left = i - 1;
      let right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          start = left;
          maxLength = currentLength;
        }
        left--;
        right++;
      }
  
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          start = left;
          maxLength = currentLength;
        }
        left--;
        right++;
      }
    }
  
    return s.substring(start, start + maxLength);
  }

 
console.log("Output:",longestPalindrome("babad")); 
console.log("Output:",longestPalindrome("cbbd"));   
console.log("Output:",longestPalindrome("a"));      
console.log("Output:",longestPalindrome("aaaa"));  
console.log("Output:",longestPalindrome("abc"));  