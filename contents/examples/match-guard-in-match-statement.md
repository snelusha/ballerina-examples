---
title: "Match guard in `match` statement"
slug: "match-guard-in-match-statement"
---

A match-guard is an expression that is used in a `match` clause to determine whether the clause should be executed. A `match` clause will only be executed if its match-guard evaluates to true.

A function call is only allowed with an expression in a match-guard when there is no possibility that it can mutate the value being matched.

<BallerinaCodeBlock
filePath="match_guard_in_match_statement.bal"
initialCommand="bal run match_guard_in_match_statement.bal"
initialOutput={"Move forward\nIncrease speed"}
source={`import ballerina/io;

const switchStatus = "ON";

function matchValue(any val, boolean isObstructed, float powerPercentage) returns string {
    // The value of the \`val\` variable is matched against the given value match patterns.
    match val {
        // The \`if !isObstructed\` match guard is used.
        1 if !isObstructed => {
            // This block will execute if \`!isObstructed\` is true.
            return "Move forward";
        }
        // Use \`|\` to match more than one value.
        2|3 => {
            return "Turn";
        }
        //The \`if 25.0 < powerPercentage\` match guard is used.
        4 if 25.0 < powerPercentage => {
            // This block will execute if \`25.0 < powerPercentage\` is true.
            return  "Increase speed";
        }
        "STOP" => {
            return "STOP";
        }
        switchStatus => {
            return "Switch ON";
        }
        // Use \`_\` to match type \`any\`.
        _ => {
            return "Invalid instruction";
        }
    }
}

public function main() {
    io:println(matchValue(1, false, 36.0));
    io:println(matchValue(4, false, 36.0));
}
`}
/>


## Related links
- [If statement](/learn/by-example/if-statement/)
- [Match statement](/learn/by-example/match-statement/)
