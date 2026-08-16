---
title: "Rest arguments"
slug: "rest-arguments"
---

Ballerina allows you to call functions with rest arguments, with an expression of a mapping or list type, spreading the members of the mapping or the list as individual arguments to the function.

If the type of the expression used in the rest argument is a list type, the rest argument is equivalent to specifying each member of the list value as a positional argument. If it is a mapping type, the rest argument is equivalent to specifying each field of the mapping value as a named argument, where the name and the value of the named argument come from the name and the value of the field. In either case, the static type of the expression must ensure that the equivalent positional and/or named arguments would be valid and that arguments are provided for all the required parameters.


<BallerinaCodeBlock
filePath="rest_arguments.bal"
initialCommand="bal run rest_arguments.bal"
initialOutput={"10\n11\n21\n22\nInitialized client with URL: http://localhost:8080, timeout: 60, HTTP version: 2.0\nInitialized client with URL: http://localhost:8080, timeout: 15, HTTP version: 1.1"}
source={`import ballerina/http;
import ballerina/io;

// A function to print the sum of two or more integers.
function sum(int first, int second, int... others) {
    int sum = first + second;
    foreach int othVal in others {
        sum += othVal;
    }
    io:println(sum);
}

// A record with some HTTP client configuration values.
type Configuration record {|
    string url;
    decimal timeout;
    http:HttpVersion httpVersion;
|};

// A function that initializes an HTTP client using some configuration.
function initializeHttpClient(string url, decimal timeout, http:HttpVersion httpVersion) {
    // Intialize the client just for demonstration.
    http:Client|error cl = new (url, {timeout, httpVersion});
    if cl is error {
        io:println("Failed to initialize an HTTP client", cl);
        return;
    }
    io:println(
        string \`Initialized client with URL: \${url}, timeout: \${timeout}, HTTP version: \${httpVersion}\`);
}

public function main() {
    // Call the \`sum\` function using an array of length 4 as a rest argument.
    int[4] ints1 = [1, 2, 3, 4];
    sum(...ints1);

    // Since the \`sum\` function has two required parameters, when providing only a list rest 
    // argument, the length of the list should be guaranteed by the static type to be at
    // least 2.
    // Call the \`sum\` function using a tuple with at least two members.
    [int, int, int...] ints2 = [5, 6];
    sum(...ints2);

    // A rest argument can be used along with positional arguments, 
    // providing only some of the arguments.
    // Call the \`sum\` function with a rest argument after two positional arguments.
    sum(5, 6, ...ints1);

    // Call the \`sum\` function with a rest argument after one positonal argument.
    // Note how the rest argument provides arguments for both a required parameter
    // and the rest parameter. Since only one positional argument is provided, the list
    // type of the expression used in the rest argument should guarantee the presence of 
    // at least one member in the list to provide an argument for the second required parameter.
    [int, int...] ints3 = [5, 6, 7];
    sum(4, ...ints3);

    // Call the \`initializeHttpClient\` function using a record value in the rest argument
    // providing values for all the parameters.
    Configuration config1 = {httpVersion: http:HTTP_2_0, url: "http://localhost:8080", timeout: 60};
    initializeHttpClient(...config1);

    // Call the \`initializeHttpClient\` function using a positional argument and a rest argument with 
    // a record value. The positional argument provides the argument for the first parameter (\`url\`) and the 
    // rest argument provides values for the other two parameters. 
    record {|
        decimal timeout;
        http:HttpVersion httpVersion;
    |} config2 = {httpVersion: http:HTTP_1_1, timeout: 15};
    initializeHttpClient("http://localhost:8080", ...config2);
}
`}
/>


## Related links
- [Functions](/learn/by-example/functions/)
- [Provide function arguments by name](/learn/by-example/provide-function-arguments-by-name/)
- [Included record parameters](/learn/by-example/included-record-parameters/)
- [Aggregation](/learn/by-example/aggregation/)
