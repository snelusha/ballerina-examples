---
title: "Boolean"
slug: "boolean"
---

The `boolean` type has two values: `true`, `false`. The `!` operator works on booleans only. `&&` and `||` operators short-circuit - the second operand is not evaluated if the result of evaluating the first operand is sufficient to identify the result of the logical expression. Usual comparison operators (`==`, `!=`, `<`, `>`, `<=`, and `>=`) produce boolean values.

<BallerinaCodeBlock
filePath="boolean.bal"
initialCommand="bal run boolean.bal"
initialOutput={`true
false`}
source={`import ballerina/io;

public function main() {
    boolean flag = true;
    io:println(flag);

    int x1 = 3;
    int x2 = 2;

    // The example below will output \`false\`.
    io:println(x1 < x2);
}
`}
/>

## Related links

- [If statement](/learn/by-example/if-statement/)
- [Match guard in match statement](/learn/by-example/match-guard-in-match-statement/)
