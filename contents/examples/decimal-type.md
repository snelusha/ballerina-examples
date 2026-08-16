---
title: "Decimal type"
slug: "decimal-type"
---

The `decimal` type is the third numeric type. It works like `int` and `float` types. It is a separate basic type and belongs to the `anydata` type.

There is no implicit conversions between `decimal` and other numeric types. It can represent `decimal` fractions exactly and it preserves precision. The `decimal` type does not include infinity, NaN, or negative zero. It supports floating-point precision to 34 decimal digits.

<BallerinaCodeBlock
filePath="decimal_type.bal"
initialCommand="bal run decimal_type.bal"
initialOutput={`100.08999999999999
1E-9
true`}
source={`import ballerina/io;

// The \`decimal\` type represents the set of 128-bits IEEE 754R decimal floating point numbers.
decimal nanos = 1d/1000000000d;

function floatSurprise() {
    float f = 100.10 - 0.01;
    io:println(f);
}

public function main() {
    floatSurprise();
    io:println(nanos);

    // Numeric literals can use \`d\` or \`D\` suffix for them to be interpreted as \`decimal\` values.
    // (Similarly, the \`f\` or \`F\` suffix can be used for \`float\`).
    var d = 12345d;
    io:println(d is decimal);
}
`}
/>
