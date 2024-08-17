import "./style.css";
import { Stack, LinkedList } from "rootbox";

const stack = new Stack();
const list = new LinkedList<number>();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

// console.log(stack);

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);

console.log(list);

const vertex = list.find(30);
const index = list.findIndex(40);

console.log("find: ", vertex);
console.log("find index: ", index);
