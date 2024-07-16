import { Stack } from "@rootbox/base";

console.log("Hello from ts-node");

const stack = new Stack([1, 2, 3]);

console.log("Stack peek: ", stack.peek);

stack.push(4);

console.log("Stack peek: ", stack);
console.log("Stack peek: ", stack.peek);
