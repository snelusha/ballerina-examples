---
title: "Function values"
slug: "function-values"
---

In Ballerina, a function is also a value implying that it can be stored in variables and passed to or returned from the functions.  A function value can be executed by calling it. A function value cannot be assigned to a defined function name.

<BallerinaCodeBlock
filePath="function_values.bal"
initialCommand="bal run function_values.bal"
initialOutput={"false\ntrue"}
source={`import ballerina/io;

// Module-level function definition.
function isEven(int n) returns boolean {
   return n % 2 == 0;
}

public function main() {
   // The \`isEven\` function is referred as a value.
   function (int n) returns boolean f = isEven;

   // The function values can be executed like regular function calls.
   io:println(f(5));
   io:println(f(6));
}
`}
/>


## Related links
- [Functions](/learn/by-example/functions/)
- [Function pointers](/learn/by-example/function-pointers/)
- [Function types](/learn/by-example/function-types/)
