
// Reverse a Stack Using Recursion
// You are given a stack of integers, and your task is to write a function that reverses the stack using recursion. You are not allowed to use any additional data structure (like arrays, lists, or another stack). The only operations you are allowed to perform are push, pop, and peek on the stack. The reversal must be done using recursion only.

// Input : [3, 1, 4, 2]

// Output : [2, 4, 1, 3]



function reverseStack(stack) {
  
    if (stack.length === 0) {
        return;
    }

    let topElement = stack.pop();

    reverseStack(stack);

    insertAtBottom(stack, topElement);
}

function insertAtBottom(stack, element) {
  
    if (stack.length === 0) {
        stack.push(element);
        return;
    }

    let topElement = stack.pop();

    insertAtBottom(stack, element);

    stack.push(topElement);
}


let stack1 = [1, 2, 3, 4];
reverseStack(stack1);
console.log(stack1);  // Output: [4, 3, 2, 1]

let stack2 = [3, 2, 1];
reverseStack(stack2);
console.log(stack2);  // Output: [1, 2, 3]

let stack3 = [-5, -10, -15];
reverseStack(stack3);
console.log(stack3);  // Output: [-15, -10, -5]

let stack4 = [];
reverseStack(stack4);
console.log(stack4);  // Output: []

let stack5 = [3, 3, 3];
reverseStack(stack5);
console.log(stack5);  // Output: [3, 3, 3]
