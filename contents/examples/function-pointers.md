---
title: "Function pointers"
slug: "function-pointers"
---

Ballerina allows you to define variables (function pointers) of function types. The name of the function variable serves as a reference to that function when it is used in an expression context. A function pointer can be invoked similarly to how a normal function is invoked.

<BallerinaCodeBlock
filePath="function_pointers.bal"
initialCommand="bal run function_pointers.bal"
initialOutput={"Add num1 & num2: 110\nAdd 1 & 2: 3"}
source={`import ballerina/io;

function add(int v1, int v2) returns int {
    return v1 + v2;
}

int num1 = 10;
int num2 = 100;

// In this example, the function pointer with default values for function pointer parameters is used 
// as a parameter. 
function executeWithDefaultValues(function (int a = num1, int b = num2) returns int func) returns int {
    return func();
}

//  In this example, the function pointer without default values for the function pointer parameters is used 
// as a parameter. 
function execute(function (int, int) returns int func, int v1, int v2) returns int {
    return func(v1, v2);
}

public function main() {
    // The \`add\` function names serve as a function pointer argument in the
    // call to the \`executeWithDefaultValues\` and \`execute\` functions.
    io:println("Add num1 & num2: ", executeWithDefaultValues(add));
    io:println("Add 1 & 2: ", execute(add, 1, 2));
}
`}
/>


## Related links
- [Functions values](/learn/by-example/function-values/)
- [Default values for function parameters](/learn/by-example/default-values-for-function-parameters/)
- [Function types](/learn/by-example/function-types/)
