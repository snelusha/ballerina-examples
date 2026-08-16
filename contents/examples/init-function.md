---
title: "Init function"
slug: "init-function"
---

The `init` function will be executed as the last function called in the program initialization phase. Uninitialized module-level `final` or `non-final` variables can be initialized in this function.

The `init` function must not be declared as public. Its return type must be a subtype of `error?` or `()`. It must have no parameters.

<BallerinaCodeBlock
filePath="init_function.bal"
initialCommand="bal run init_function.bal"
initialOutput="error: Value should less than 3"
source={`import ballerina/io;

// Uninitialized integer variable \`value\`.
int value;

// Uninitialized final string variable \`name\`.
final string name;

function init() returns error? {
    // Initialize the \`value\` variable to 5.
    value = 5;
    // Initialize the final variable greeting to \`James\`.
    name = "James";

    if value > 3 {
        // The initialization will fail with this error message.
        return error("Value should less than 3");
    }
}

public function main() {
    // This will not be executed because the init function returns an error.
    io:println(name);
}

`}
/>
