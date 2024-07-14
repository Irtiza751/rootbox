export class Stack<T> {
  private stack: T[] = [];

  constructor(list?: T[]) {
    if (list) {
      this.stack = list;
    }
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  get peek() {
    return this.stack.at(-1);
  }
}
