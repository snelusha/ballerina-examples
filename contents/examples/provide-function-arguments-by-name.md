---
title: "Provide function arguments by name"
slug: "provide-function-arguments-by-name"
---

Ballerina allows you to call functions with named arguments, which do not have to be in the same order as the parameters.


<BallerinaCodeBlock
filePath="provide_function_arguments_by_name.bal"
initialCommand="bal run provide_function_arguments_by_name.bal"
initialOutput={"Sum of x, y and z:6\nSum of x, y and z:6\nSum of x, y and z:6\nSum of x, y and z:6"}
source={`import ballerina/io;

function add(int x, int y, int z) {
    io:println("Sum of x, y and z:", x + y + z);
}

public function main() {
    // Calls the \`add\` function using the positional arguments.
    add(1, 2, 3);

    // Calls the \`add\` function using the named arguments in the same order as the parameters of the function definition.
    add(x = 1, y = 2, z = 3);

    // Calls the \`add\` function using the named arguments in a different order from the order of the parameters in the function definition.
    add(z = 3, y = 2, x = 1);

    // Calls the \`add\` function using a combination of named arguments and positional arguments.
    add(1, z = 3, y = 2);
}
`}
/>


## Related links
- [Functions](/learn/by-example/functions/)
- [Included record parameters](/learn/by-example/included-record-parameters/)
- [Rest arguments](/learn/by-example/rest-arguments/)
