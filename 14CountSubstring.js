// Q14.Count Substrings with Exactly K Distinct Characters

// You are given a string s of lowercase English alphabets and an integer k. Your task is to count all possible substrings of s that contain exactly k distinct characters.

// Input:
// A string s consisting of lowercase English letters.
// An integer k, where 1 ≤ 𝑘 ≤ 26
// The length of the string satisfies 1 ≤ 𝑛 ≤ 104

// Output:
// Return an integer that represents the number of substrings of s that contain exactly k distinct characters.

// Examples:
// Example 1
// Input: s = "pqpqs", k = 2
// Output: 12
// Explanation: The possible substrings with exactly 2 distinct characters are: "pq", "pqp", "qp", "pqs", "pq", "qs", and "pq". Thus, there are 7 such substrings.

// Constraints:
// A string s consisting of lowercase English letters.
// An integer k, where 1 ≤ 𝑘 ≤ 26
// The length of the string satisfies 1 ≤ 𝑛 ≤ 104

// Test Cases:
// Input: s = "pqpqs", k = 2
// Output: 7
// Input: s = "aabacbebebe", k = 3
// Output: 10
// Input: s = "a", k = 1
// Output: 1
// Input: s = "abc", k = 3
// Output: 1
// Input: s = "abc", k = 2
// Output: 2



function CountSubstrings(s, k) {
   
    function atMostKDistinct(s, k) {
        let start = 0;
        let charCount = {};
        let count = 0;
        let distinct = 0; 

        for (let end = 0; end < s.length; end++) {
            let endChar = s[end];

            
            if (!charCount[endChar]) {
                charCount[endChar] = 0;
            }
            if (charCount[endChar] === 0) {
                distinct++; 
            }
            charCount[endChar]++;

           
            while (distinct > k) {
                let startChar = s[start];
                charCount[startChar]--;
                if (charCount[startChar] === 0) {
                    distinct--; 
                }
                start++;
            }

            count += end - start + 1;
        }

        return count;
    }

    return atMostKDistinct(s, k) - atMostKDistinct(s, k - 1);
}

// Test cases
console.log("Input:pqpqs,Output:",CountSubstrings("pqpqs", 2)); 
console.log("Input:aabacbebebe,Output:",CountSubstrings("aabacbebebe", 3));  
console.log("Input:a,Output:",CountSubstrings("a", 1));  
console.log("Input:abc,Output:",CountSubstrings("abc", 3));  
console.log("Input:abc,Output:",CountSubstrings("abc", 2));  
