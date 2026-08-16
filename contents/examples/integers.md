---
title: "Integers"
slug: "integers"
---

The `int` type is 64-bit signed integers and supports the usual arithmetic operators: `+ - / %`. Integer overflow is a runtime error in Ballerina.

<BallerinaCodeBlock
filePath="integers.bal"
initialCommand="bal run integers.bal"
initialOutput="65536"
source={`import ballerina/io;

public function main() {
    int m = 1;

    // Integer literals can be hexadecimal (but not octal).
    int n = 0xFFFF;

    // You can use compound assignment operations such as \`+=\` and \`-=\`.
    n += m;

    io:println(n);
}
`}
/>
