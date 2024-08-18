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

list.print();
list.insert(35, 3); // 10 -> 20 -> 30 -> 35 -> 40 -> 50 -> 60
list.print();

const vertex = list.find(30);
const index = list.findIndex(40);
const item = list.findByIndex(3);

console.log("find: ", vertex);
console.log("find index: ", index);
console.log("find by index: ", item);
