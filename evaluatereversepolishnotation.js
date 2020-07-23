//Objective is to evaluate operations in reverse polish notation.

let tokens = ["4", "13", "5", "/", "+"]


//O(n) solution that pushes values into a stack, and once an operation is passed,
//we perform it with the top two elements in the stack

//We do b first since it evaluates it in reverse order
let operations = {
    '+': (a,b) => b + a,
    '-': (a,b) => b - a,
    '*': (a,b) => b * a,
    '/': (a,b) => Math.trunc(b / a)
}

let stack = []

for (let token of tokens) {
    if (operations[token] != undefined) {
        stack.push(operations[token](Number(stack.pop()), Number(stack.pop())))
    } else {
        stack.push(token)
    }
}

return stack[0]