// Q 9.Longest Common Prefix
// You are given an array of strings strs[], consisting of lowercase letters. Your task is to find the longest common prefix shared among all the strings. If there is no common prefix, return an empty string "".

// Input :
// An array of strings strs[] where each string consists of lowercase English letters.
// Example: strs[] = ["flower", "flow", "flight"]

// Output :
// * A string representing the longest common prefix. If no common prefix exists, return an empty string "".
// Example: "fl"


function LongestCommon(strs) {
    if (strs.length === 0) {
      return ""; 
    }
  
    let smallString = strs[0];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].length < smallString.length) {
        smallString = strs[i];
      }
    }
  
    // Iterate through the characters of the shortest string
    for (let i = 0; i < smallString.length; i++) {
      const char = smallString[i];
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== char) {
          return smallString.substring(0, i);
        }
      }
    }
  
    return smallString;
  }
  const strs = ["flower", "flow", "flight"];
const longestPrefix = LongestCommon(strs);
console.log("Output:",longestPrefix); 