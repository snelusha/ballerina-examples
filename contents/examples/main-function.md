---
title: "Main function"
slug: "main-function"
---

The `main` function is the program entry point and the `public` keyword makes this function visible outside the module. It is a compile-time error if visibility is not set to `public` in the `main` function.

The `main` function can accpet the command-line arguments and returns `error` or `nil`.

<BallerinaCodeBlock
filePath="main_function.bal"
initialCommand="bal run main_function.bal"
initialOutput={
`5
error: Input should less than 3`
}
source={`import ballerina/io;

// The \`main\` function can accept command-line arguments and return \`error\` or \`nil\`.
public function main() returns error? {
    int value = 5;
    io:println(value);

    if value >= 3 {
        return error("Input should less than 3");
    }
}

`}
/>
