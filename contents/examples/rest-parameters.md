---
title: "Rest Parameters"
slug: "rest-parameters"
---

Ballerina supports rest parameters. There can not be another parameter after a rest parameter.
If a function has a rest parameter, that will be initialized to a newly created list with the remaining arguments in the function.
The inherent type of this list is `T[]` in which `T` is the type of the rest parameter.

<BallerinaCodeBlock
filePath="rest_parameters.bal"
initialCommand="bal run rest_parameters.bal"
initialOutput={"1\nx\ny\nz\n[\"x\",\"y\",\"z\"]\ntrue\n"}
source={`import ballerina/io;

function foo(int n, string... s) {
    io:println(n);
    io:println(s[0]);
    io:println(s[1]);
    io:println(s[2]);
    io:println(s);
    io:println(s is string[]);
}

public function main() {
    // The \`s\` parameter will be \`["x", "y", "z"]\`.
    foo(1, "x", "y", "z");
}
`}
/>
