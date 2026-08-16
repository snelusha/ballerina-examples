---
title: "Identifiers"
slug: "identifiers"
---

Identifier syntax is similar to C. Keywords are reserved.

<BallerinaCodeBlock
filePath="identifiers.bal"
initialCommand="bal run identifiers.bal"
initialOutput="ආයුබෝවන්"
source={`import ballerina/io;

// You can have Unicode identifiers.
function พิมพ์ชื่อ(string ชื่อ) {
    // Use \\u{H} to specify character using Unicode code point in hex.
    io:println(ชื่อ);
}

// Prefix reserved keywords with a single quote.
// string 'from = "contact@ballerina.io";

// Prefix non-identifier character with a \\\\.
// string first\\ name = "Ballerina";

public function main() {
    พิมพ์ชื่อ("ආයුබෝවන්");
}
`}
/>
