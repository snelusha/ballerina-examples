---
title: "Function closure"
slug: "function-closures"
---

The object constructor and function can work as a closure, that can access variables outside of its own scope. It is a compile-time error to have parameter names similar to the outer-scope variable names.

<BallerinaCodeBlock
filePath="function_closure.bal"
initialCommand="bal run function_closure.bal"
initialOutput={"[\"Ana\",\"Alice\",\"Bob\",\"James\"]\n[\"Ana\",\"Alice\",\"Bob\",\"James\"]"}
source={`import ballerina/io;

public function main() {
    string[] names = ["Ana", "Alice", "Bob"];

    // Define a function to modify and return the variable 'names' that are declared outside the scope.
    var addName = function(string value) returns string[] {
        // Access the variable \`names\` as closure within the \`addName\` inner function.
        names.push(value);
        return names;
    };

    io:println(addName("James"));
    io:println(names);
}
`}
/>


## Related links
- [Function values](/learn/by-example/function-values/)
- [Anonymous function](/learn/by-example/anonymous-function/)
