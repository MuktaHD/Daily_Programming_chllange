//Q 12. Valid Parentheses with Multiple Types
// You are given a string s consisting of different types of parentheses: (), {}, and []. Your task is to determine whether the given string is valid.

// Input : s = "[{()}]"

// Output : true



function ValidParenthesis(s) {
   
    if (s.length % 2 !== 0) return false;  // string lenth is odd,then it can not valid
    
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in pairs) {
            stack.push(char);
        } 
       
        else {
           
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(ValidParenthesis("()"));         
console.log(ValidParenthesis("([)]"));       
console.log(ValidParenthesis("[{()}]"));   
console.log(ValidParenthesis(""));  
