// Q 10.Group Anagrams
// You are given an array of strings strs[]. Your task is to group all the strings that are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input :
// strs[] = ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output :
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]



// function groupAnagrams(strs) {
//     const anagramGroups = new Map();
  
//     for (const str of strs) {
//       const sortedStr = str.split("").sort().join(""); 
  
//       if (anagramGroups.has(sortedStr)) {
//         anagramGroups.get(sortedStr).push(str);
//       } else {
//         anagramGroups.set(sortedStr, [str]);
//       }
//     }
  
//     return Array.from(anagramGroups.values());
//   }

function groupAnagrams(strs) {
    const anagramGroups = new Map();
  
    for (const str of strs) {
      const characterCounts = new Array(26).fill(0);
  
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) - 97; 
        characterCounts[charCode]++;
      }
  
      const characterCountKey = characterCounts.join(",");
  
      if (anagramGroups.has(characterCountKey)) {
        anagramGroups.get(characterCountKey).push(str);
      } else {
        anagramGroups.set(characterCountKey, [str]);
      }
    }
  
    return Array.from(anagramGroups.values());
  }
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(strs);
console.log("Output:",groupedAnagrams); 