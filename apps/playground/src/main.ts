import "./style.css";
import { Stack, LinkedList } from "rootbox";
import { Query } from "rawql";

const stack = new Stack();
const list = new LinkedList<number>();
const query = new Query();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

// console.log(stack);

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);

list.print();
list.insert(35, 3); // 10 -> 20 -> 30 -> 35 -> 40 -> 50 -> 60
// list.insert(5, 0);
console.warn("List after insert");
list.print();

console.log("find: ", list.find(30));
console.log("find index: ", list.findIndex(40));
console.log("find by index: ", list.at(3));

console.log(list);
console.log(query.select("name", "age", "gender").from("user").build());
