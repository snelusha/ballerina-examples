---
title: "Function types"
slug: "function-types"
---

In Ballerina, the function type is a separate basic type. The syntax for a function type looks like a function definition without a function name.

When assigning a function value to a variable of the function type, the function signatures must be equal. However, parameters may have default values in either the function value or the function type or both. If a default value is provided in both the function value and function type, the default value in the function type will be used when the function is invoked.

<BallerinaCodeBlock
filePath="function_types.bal"
initialCommand="bal run function_types.bal"
initialOutput={"false\ntrue\nfalse\ntrue\ntrue"}
source={`import ballerina/io;

// Function type syntax.
type IntFilter function (int num) returns boolean;

// Module-level function definition.
function isEven(int n) returns boolean {
    return n % 2 == 0;
}

public function main() {
    // Type of the \`evenFunc1\` variable is the \`IntFilter\` function type.
    IntFilter evenFunc1 = isEven;
    io:println(evenFunc1(5));
    io:println(evenFunc1(6));

    // Type of the \`evenFunc2\` variable is the \`function (int num = 5) returns boolean\` function type.
    function (int num = 5) returns boolean evenFunc2 = isEven;

    // Invoke the function with the default value defined in the function type.
    io:println(evenFunc2());
    // Invoke the function with the passed argument.
    io:println(evenFunc2(6));

    function (int num = 6) returns boolean evenFunc3 = isolated function(int n = 5) returns boolean {
        return n % 2 == 0;
    };

    // Invoke the function with \`6\` as the default value for the parameter \`num\`.
    io:println(evenFunc3());
}
`}
/>


## Related links
- [Function values](/learn/by-example/function-values/)
- [Anonymous function](/learn/by-example/anonymous-function/)
- [Default values for function parameters](/learn/by-example/default-values-for-function-parameters/)
- [Function pointers](/learn/by-example/function-pointers/)
