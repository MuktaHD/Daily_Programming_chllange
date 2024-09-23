// Q 15.Find the Longest Substring Without Repeating Characters
// You are given a string S, and your task is to find the length of the longest substring that contains no repeating characters. A substring is a contiguous block of characters in the string.

// Input : S = "abcabcbb"

// Output : 3



function LongestSubstring(S) {
    let n = S.length;
    let map = new Map(); 
    let maxLength = 0;  
    let start = 0;     

    for (let end = 0; end < n; end++) {
        let char = S[end];
    
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1; 
        }
       
        map.set(char, end);
        
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log("Input:abcabcbb, Output:",LongestSubstring("abcabcbb"));
console.log("Input:bbbbb, Output:",LongestSubstring("bbbbb"));    
console.log("Input:pwwkew, Output:",LongestSubstring("pwwkew"));   
console.log("Input:abcdefgh, Output:",LongestSubstring("abcdefgh")); 
console.log("Input:a, Output:",LongestSubstring("a"));      
