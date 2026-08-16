---
title: "Unary operators"
slug: "unary-operators"
---

Ballerina supports unary operators that perform operations on a single operand. The unary `-` operator negates the value of a numeric type by changing its sign. The unary `+` operator returns the value of its numeric operand. The `~` operator inverts the bits of an integer, flipping each 0 to 1 and each 1 to 0.

For boolean values, the `!` operator inverts the boolean value, changing `true` to `false` and `false` to `true`.

<BallerinaCodeBlock
filePath="unary_operators.bal"
initialCommand="bal run unary_operators.bal"
initialOutput={"-10\n-11\n-127\n10.5\n-10.5\nfalse"}
source={`import ballerina/io;

public function main() {
    int a = 10;

    // Negate the value of \`a\`.
    int negatedInt = -a;
    io:println(negatedInt);
    
    // Invert the bits of \`a\`.
    int bitwiseInvertedInt = ~a;
    io:println(bitwiseInvertedInt);

    int:Signed8 b = 127;

    // Negate the value of \`b\`.
    int negatedSigned8Int = -b;
    io:println(negatedSigned8Int);

    float c = -10.5;

    // Negate the value of \`c\`.
    float negatedFloat = -c;
    io:println(negatedFloat);
    
    // Using the \`+\` operator returns the value of its operand expression.
    float unchangedFloat = +c;
    io:println(unchangedFloat);

    boolean d = true;

    // Invert the boolean value of \`d\`.
    boolean negatedBoolean = !d;
    io:println(negatedBoolean);
}
`}
/>
