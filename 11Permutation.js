// Q 11.Permutations of a String
// You are given a string s. Your task is to generate and return all possible permutations of the characters in the string. A permutation is a rearrangement of the characters in the string, and each character must appear exactly once in every permutation. If there are duplicate characters in the string, the resulting permutations should also be unique (i.e., no repeated permutations).

// Input : "abc"

// Output : ["abc", "acb", "bac", "bca", "cab", "cba"]


function permutation(str) {
    let result = [];
  
    //  swap characters in an array
    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
   
    function createPermutations(arr, index) {
     
      if (index === arr.length - 1) {
        result.push(arr.join('')); 
        return;
      }
  
      // swap each character
      for (let i = index; i < arr.length; i++) {
        swap(arr, index, i);
        createPermutations(arr, index + 1); 
        swap(arr, index, i); 
      }
    }
  
    createPermutations(str.split(''), 0); //Conver string to array
  
    return result;
  }
  
  // Test the function
  let s = "abc";
  console.log("Output:",permutation(s));  // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
  