---
title: "If statement"
slug: "if-statement"
---

`if` statements are used for conditional execution. Conditions following `if` must be boolean and if the condition is true, then, the corresponding statement block is executed. If the condition of the `if` statement is false, then, one of the following `else if` blocks executes if the particular `else if` statement condition is true. If none of the conditions are true, then, the `else` block executes.

<BallerinaCodeBlock
filePath="if_statement.bal"
initialCommand="bal run if_statement.bal"
initialOutput={"B\nA"}
source={`import ballerina/io;

function getGrades(int score) returns string {
    // Parentheses are optional in conditions.
    // However, curly braces are required in \`if/else\` statements.
    if 0 < score && score < 55 {
        return "F";
    } else if 55 <= score && score < 65 {
        return "C";
    } else if 65 <= score && score < 75  {
        return "B";
    } else if 75 <= score && score <= 100 {
        return "A";
    } else {
        return "Invalid grade";
    }
}

public function main() {
    int score = 66;
    string grade = getGrades(score);
    io:println(grade);

    int|string newScore = 77;

    // The \`if\` statement can be used for type narrowing.
    if newScore is int {
        io:println(getGrades(newScore));
    } else {
        io:println("Score is not an integer");
    }

}
`}
/>


## Related links
- [Boolean](/learn/by-example/boolean/)
