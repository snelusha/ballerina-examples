---
title: "Match statement"
slug: "match-statement"
---

`match` statement is similar to `switch` statement in some other languages. It matches the value, not the type. `==` is used to test whether the left hand side matches the value being matched. The left hand side can be a simple literal (`nil`, `boolean`, `int`, `float`, `string`) identifier referring to a constant.

Left hand side of `_` matches if the value is of type `any`. You can use `|` to match more than one value.

<BallerinaCodeBlock
filePath="match_statement.bal"
initialCommand="bal run match_statement.bal"
initialOutput={"Move forward\nTurn\nSTOP\nSwitch ON\nInvalid instruction"}
source={`import ballerina/io;

const SWITCH_STATUS = "ON";

function matchValue(any val) returns string {
    // The value of the \`val\` variable is matched against the given value match patterns.
    match val {
        1 => {
            return "Move forward";
        }
        // Use \`|\` to match more than one value.
        2|3 => {
            return "Turn";
        }
        "STOP" => {
            return "STOP";
        }
        SWITCH_STATUS => {
            return "Switch ON";
        }
        // Use \`_\` to match type \`any\`.
        _ => {
            return "Invalid instruction";
        }
    }

}

public function main() {
    io:println(matchValue(1));
    io:println(matchValue(2));
    io:println(matchValue("STOP"));
    io:println(matchValue(SWITCH_STATUS));
    io:println(matchValue("default"));
}
`}
/>


## Related links
- [If statement](/learn/by-example/if-statement/)
