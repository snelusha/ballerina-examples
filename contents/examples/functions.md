---
title: "Functions"
slug: "functions"
---

Functions are declared using the `function` keyword. It accepts zero or more arguments and returns a single value. The `returns` keyword is used to indicate the return type of the function.

Function parameters are final variables and cannot be modified within the function.

<BallerinaCodeBlock
filePath="functions.bal"
initialCommand="bal run functions.bal"
initialOutput={"16\n49.0\n11"}
source={`import ballerina/io;

// This function definition has two parameters of type \`int\`.
// The \`returns\` clause specifies the type of the return value.
function add(int x, int y) returns int {
    int sum = x + y;
    // The \`return\` statement returns a value.
    return sum;
}

// The function parameters can have default values.
function calculateWeight(decimal mass, decimal gForce = 9.8) returns decimal {
    return mass * gForce;
}

// The function returns \`nil\`.
function print(anydata data) {
    io:println(data);
}

public function main() {
    // Invoke the function \`add\` by passing the arguments.
    int sum = add(5, 11);
    // A function with no return type does not need a variable assignment.
    print(sum);

    // Invoke the \`calculateWeight\` function with the default arguments.
    print(calculateWeight(5));

    // Invoke the \`add\` function with the named arguments.
    print(add(x = 5, y = 6));

    // The return value of the function can be ignored by assigning it to \`_\`.
    _ = calculateWeight(mass = 5, gForce = 10);
}
`}
/>


## Related links
- [Included record parameters](/learn/by-example/included-record-parameters/)
- [Rest Parameters](/learn/by-example/rest-parameters/)
- [Default values for function parameters](/learn/by-example/default-values-for-function-parameters/)
- [Provide function arguments by name](/learn/by-example/provide-function-arguments-by-name/)
- [Rest arguments](/learn/by-example/rest-arguments/)
- [Function pointers](/learn/by-example/function-pointers/)
- [Function values](/learn/by-example/function-values/)
- [Function types](/learn/by-example/function-types/)
- [Anonymous function](/learn/by-example/anonymous-function/)
- [Function closure](/learn/by-example/function-closure/)
