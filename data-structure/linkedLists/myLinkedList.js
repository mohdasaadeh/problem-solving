class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new LinkedList();

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.tail.value = value;
    this.length++;

    return this;
  }

  pop() {
    let beforeLastTail = null;

    for (let i = 1; i < this.length; i++) {
      if (i === 1) {
        beforeLastTail = this.head;
      } else {
        beforeLastTail = beforeLastTail.next;
      }
    }

    if (this.length === 0) {
      return this;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      beforeLastTail.next = null;
      this.tail = beforeLastTail;
    }

    this.length--;

    return this;
  }
}

const linkedList = new LinkedList();

linkedList.push("hello");
linkedList.push("world");
linkedList.push("again");
linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.pop();

console.log(linkedList.length, linkedList);
