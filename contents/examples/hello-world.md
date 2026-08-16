---
title: "Hello World"
slug: "hello-world"
---

Let's write the `Hello World` program in Ballerina.

<BallerinaCodeBlock
filePath="hello_world.bal"
initialCommand="bal run hello_world.bal"
initialOutput="Hello, World!"
source={`import ballerina/io;

public function main() {
    io:println("Hello, World!");
}`}
/>

Edit the source, then use **Run** to execute it in the browser.
