class Vertex<T> {
  public data: T;
  public next: Vertex<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private head: Vertex<T> | null;
  private tail: Vertex<T> | null;
  public size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @description
   * Insert the node at the end of the list
   */
  append(data: T) {
    const vertex = new Vertex(data);
    if (!this.head) {
      this.head = vertex;
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = vertex;
      this.tail = vertex;
    }
    this.size++;
  }

  /**
   * @description
   * Insert the node in the front of the list
   */
  prepend(data: T) {
    const vertex = new Vertex(data);
    if (!this.head) {
      this.head = vertex;
      this.tail = this.head;
    } else {
      vertex.next = this.head;
      this.head = vertex;
    }

    this.size++;
  }

  /**
   * @description
   * Insert the node at any index provided or at end of the list.
   * @return void
   */
  insert(data: T, index: number) {}

  /**
   * @description
   * find the node if matched with the provided data;
   * @return Vertex
   */
  find(data: T) {
    let current = this.head;
    while (current?.next) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  /**
   * @description
   * remove the node if matched with the provided data;
   * @return Vertex
   */
  findIndex(data: T) {
    let index = 0;
    let current = this.head;
    while (current?.next) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }
  }

  /**
   * @description
   * find the node by its index.
   * @return Vertex
   */
  at(index: number) {
    let current = this.head;
    let count = 0;
    while (current?.next) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
  }

  /**
   * @description
   * remove the node if matched with the provided data;
   * @return Vertex
   */
  remove(data: T) {}

  /**
   * @description
   * remvoe the last node (tail) of the linkedlist;
   * @return Vertex
   */
  removeLast() {}

  /**
   * @description
   * remvoe the fist node (head) of the linkedlist;
   * @return Vertex
   */
  removeFirst() {}

  /**
   * @description
   * print the complete linked list.
   * @return Vertex
   */
  print() {
    let list = "";
    let current = this.head;

    while (current?.next) {
      current = current.next;
      list += current.data + (current.next ? " => " : "");
    }

    console.log(list);
  }
}
