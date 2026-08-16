---
title: "Byte type"
slug: "byte-type"
---

The byte type in Ballerina represents an 8-bit unsigned integer, with values ranging from 0 to 255.

<BallerinaCodeBlock
filePath="byte_type.bal"
initialCommand="bal run byte_type.bal"
initialOutput={`255
255`}
source={`import ballerina/io;

public function main() {
    // The \`byte\` type consists of integers ranging from \`0\` to \`255\`.
    byte b = 255;
    io:println(b);

    // Since the set of possible \`byte\` values is a subset of \`int\` values,
    // the \`byte\` type is a subtype of the \`int\` type.
    int i = b;
    io:println(i);
}
`}
/>

## Related links

- [Built-in integer subtypes](/learn/by-example/built-in-integer-subtypes/)
