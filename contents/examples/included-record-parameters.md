---
title: "Included record parameters"
slug: "included-record-parameters"
---

Ballerina allows you to define functions with included record parameters using `*T` notation. The function defines records for named parameters, where all the arguments are passed within a record value. But, the caller can pass parameters by name, which are the same as the record field names.

<BallerinaCodeBlock
filePath="included_record_parameters.bal"
initialCommand="bal run included_record_parameters.bal"
initialOutput={"Input File:file.txt\nOptions:{\"verbose\":true,\"outputFile\":null}\nInput File:file.txt\nOptions:{\"verbose\":true,\"outputFile\":null}"}
source={`import ballerina/io;

type Options record {|
    boolean verbose = false;
    string? outputFile = ();
|};

// \`foo\` has a string parameter \`inputFile\` and an included record parameter of the
// \`Options\` record type.
function foo(string inputFile, *Options options) {
    io:println("Input File:", inputFile);
    io:println("Options:", options);
}

public function main() {
    // Call \`foo()\` by directly passing a value of the \`Options\` record type.
    foo("file.txt", {verbose: true});

    // Pass named arguments having the same names as the fields in the \`Options\` record.
    foo("file.txt", verbose = true);
}
`}
/>
