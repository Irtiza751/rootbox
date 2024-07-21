import "./style.css";
import { Stack, LinkedList } from "rootbox";

const stack = new Stack();
const list = new LinkedList<number>();

stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);

// console.log(stack);

list.append(10);
list.append(20);
list.append(30);
list.prepend(9);
list.prepend(8);

console.log(list);
