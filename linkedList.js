class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.length = 0;
  }

  append(value) {
    let newNode = new Node();
    newNode.value = value;

    let curr;

    if (this.first === null) {
      this.first = newNode;
    } else {
      curr = this.first;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
  }

  at(index) {
    if (index >= this.length) {
      return "Index out of bounds";
    }
    let curr = this.first;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  contains(target) {
    let curr = this.first;
    while (curr) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  find(target) {
    let curr = this.first;
    for (let i = 0; i < this.length; i++) {
      if (curr.value === target) {
        return i;
      } else {
        curr = curr.next;
      }
    }
    return curr;
  }

  head() {
    return this.first;
  }

  insertAt(value, index) {
    if (index > this.length) return;
    if (index === 0) this.prepend(value);
    if (index === this.length) this.append(value);
    let newNode = new Node();
    newNode.value = value;

    let prev = this.at(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    let popped;

    if (this.length === 1) {
      popped = this.first;
      this.first = null;
      this.length--;
      return popped;
    } else {
      let second_last = this.first;
      while (second_last.next.next) {
        second_last = second_last.next;
      }
      popped = second_last.next;
      second_last.next = null;
      this.length--;
      return popped;
    }
  }

  prepend(value) {
    let newNode = new Node();
    newNode.value = value;
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index >= this.length) {
      console.log("Index out of bounds");
      return;
    }
    let prev = this.at(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  size() {
    return this.length;
  }

  tail() {
    let curr = this.first;
    while (curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  toString() {
    let curr = this.first;

    while (curr) {
      process.stdout.write(`${curr.value} -> `);
      curr = curr.next;
    }
    process.stdout.write(`${curr}`);
    console.log();
  }
}
