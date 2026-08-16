---
title: "Binary operators"
slug: "binary-operators"
---

Ballerina provides several binary operators to perform operations on values of various types such as integers, floats, booleans, and strings. Binary arithmetic operators (`+`, `-`, `*`, `/`, and `%`) allow basic mathematical calculations between two values. The operators to compare values (`<`, `>`, `<=`, and `>=`) produce a boolean result.

Ballerina also supports binary logical operators (`&&` and `||`) to perform logical operations on boolean values and bitwise operators (`&`, `|`, `^`, `<<`, `>>`, and `>>>`) to manipulate bits in integer values.

<BallerinaCodeBlock
filePath="binary_operators.bal"
initialCommand="bal run binary_operators.bal"
initialOutput={"30\n-10\n200\n2\n0\ntrue\nfalse\n31.0\n-10.0\n215.25\n0.5121951219512195\ntrue\nfalse\nfalse\ntrue\ntrue\n0\n30\n30\n40\n2\n2\nHello Ballerina\ntrue"}
source={`import ballerina/io;

public function main() {
    int a = 10;
    int b = 20;

    // Perform integer addition.
    int sum = a + b;
    io:println(sum);

    // Perform integer subtraction.
    int difference = a - b;
    io:println(difference);

    // Perform integer multiplication.
    int product = a * b;
    io:println(product);

    // Perform integer division.
    int quotient = b / a;
    io:println(quotient);

    // Perform integer remainder.
    int remainder = b % a;
    io:println(remainder);

    // \`>\`, \`<\`, \`>=\` and \`<=\` are used to test the relative order of two values.
    // Check if \`a\` is less than \`b\`.
    boolean isLessThan = a < b;
    io:println(isLessThan);

    // Check if \`a\` is greater than or equal to \`b\`.
    boolean isGreaterThanOrEqual = a >= b;
    io:println(isGreaterThanOrEqual);

    float e = 10.5;
    float f = 20.5;

    // Perform floating-point addition.
    float floatSum = e + f;
    io:println(floatSum);

    // Perform floating-point subtraction.
    float floatDifference = e - f;
    io:println(floatDifference);

    // Perform floating-point multiplication.
    float floatProduct = e * f;
    io:println(floatProduct);

    // Perform floating-point division.
    float floatQuotient = e / f;
    io:println(floatQuotient);

    // Check if \`e\` is less than or equal to \`f\`.
    boolean isLessOrEqual = e <= f;
    io:println(isLessOrEqual);

    // Check if \`e\` is greater than \`f\`.
    boolean isGreaterThan = e > f;
    io:println(isGreaterThan);

    boolean c = true;
    boolean d = false;

    // Perform the logical AND operation between two boolean values.
    boolean logicalAnd = c && d;
    io:println(logicalAnd);

    // Perform logical OR between two boolean values.
    boolean logicalOr = c || d;
    io:println(logicalOr);

    // For the \`<\` operator, \`d < c\` evaluates to \`true\` when \`d\` is \`false\` and \`c\` is \`true\`.
    boolean isLessThanBoolean = d < c;
    io:println(isLessThanBoolean);

    int g = 10;
    int h = 20;

    // Perform bitwise AND between two integers.
    int bitwiseAnd = g & h;
    io:println(bitwiseAnd);

    // Perform bitwise OR between two integers.
    int bitwiseOr = g | h;
    io:println(bitwiseOr);

    // Perform bitwise XOR between two integers.
    int bitwiseXor = g ^ h;
    io:println(bitwiseXor);

    // Left shift an integer by 2 bits.
    int leftShift = g << 2;
    io:println(leftShift);

    // Right shift an integer by 2 bits (signed).
    int signedRightShift = g >> 2;
    io:println(signedRightShift);

    // Right shift an integer by 2 bits (unsigned).
    int unsignedRightShift = g >>> 2;
    io:println(unsignedRightShift);

    string i = "Hello";
    string j = "Ballerina";

    // Concatenate two strings.
    string concatenatedString = i + " " + j;
    io:println(concatenatedString);

    // Check if \`i\` is lexicographically greater than \`j\` in Unicode code point order.
    boolean isGreaterThanString = i > j;
    io:println(isGreaterThanString);
}
`}
/>
