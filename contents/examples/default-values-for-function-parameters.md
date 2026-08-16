---
title: "Default values for function parameters"
slug: "default-values-for-function-parameters"
---

Ballerina allows specifying default values for function parameters. You can use any expression such as a literal or a function call as the default value of a parameter. Additionally, the default value expressions can use the values of the preceding parameters.

<BallerinaCodeBlock
filePath="default_values_for_function_parameters.bal"
initialCommand="bal run default_values_for_function_parameters.bal"
initialOutput={"Ballerina Language\nLanguage\nLang"}
source={`import ballerina/io;

// Use the value of the preceding \`str\` parameter to initialize the \`end\` parameter.
function subString(string str, int 'start = 0, int end = str.length()) returns string {
    return str.substring('start, end);
}

public function main() {
    // Call the \`subString\` function using the default values of \`start\` and \`end\` parameters.
    io:println(subString("Ballerina Language"));

    // Call the \`subString\` function by passing a value for the \`start\` default parameter.
    io:println(subString("Ballerina Language", 10));

    // Call the \`subString\` function by passing values for \`start\` and \`end\` default parameters.
    io:println(subString("Ballerina Language", 10, 14));
}
`}
/>


## Related links
- [Rest Parameters](/learn/by-example/rest-parameters/)
- [Provide function arguments by name](/learn/by-example/provide-function-arguments-by-name/)
- [Rest arguments](/learn/by-example/rest-arguments/)
