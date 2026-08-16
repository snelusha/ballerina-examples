---
title: "Programs and modules"
slug: "programs-and-modules"
---

Every Ballerina program consists of modules. Modules are one or more `.bal` files. The module names take the form `org/x.y.z`.

<BallerinaCodeBlock
filePath="programs_and_modules.bal"
initialCommand="bal run programs_and_modules.bal"
initialOutput="Hello, World!"
source={`// This import declaration binds the prefix \`io\` to the \`ballerina/io\` package.
// The prefix by default comes from the last part of the package name.

// The \`ballerina\` org name is reserved for the Ballerina library packages.
import ballerina/io;

// \`main\` function is the program entry point.
// \`public\` makes the function visible outside the package.
public function main() {
    // Here \`io:println\` means function \`println\` is in the package bound to prefix \`io\`.
    io:println("Hello, World!");
}

`}
/>
