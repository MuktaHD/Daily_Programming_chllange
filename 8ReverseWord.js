// Q 8. Reverse a String Word by Word
// You are given a string s that consists of multiple words separated by spaces. Your task is to reverse the order of the words in the string. Words are defined as sequences of non-space characters. The output string should not contain leading or trailing spaces, and multiple spaces between words should be reduced to a single space.

// Input :
// A string s of length n (1 ≤ n ≤ 10^4) consisting of letters, digits, punctuation, and spaces.
// Example : "the sky is blue"

// Output :
// * A string where the words in s are reversed, with a single space separating the words, and no leading or trailing spaces.
// Example: "blue is sky the"



function reverseWords(s) {
    let result = '';     // store last output
    let word = '';       // staring word 
    let i = s.length - 1;  
  
    while (i >= 0) {
      // remove spaces
      while (i >= 0 && s[i] === ' ') {
        i--;
      }
  
      //Build word from the end
      while (i >= 0 && s[i] !== ' ') {
        word = s[i] + word;
        i--;
      }
  

      //Add the word to the result
      if (word) {
        if (result) {
          result += ' ';
        }
        result += word;
        word = '';  
      }
    }
  
    return result;
  }
 
  const input = "  the sky   is  blue  ";
  const output = reverseWords(input);
  console.log("Output: ",output);  
  