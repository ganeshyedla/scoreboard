// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  size() {
    if (this.head) {
      let nextNode = this.head.next;
      let count = 1;
      while (nextNode) {
        nextNode = nextNode.next;
        count++;
      }
      return count;
    } else return 0;
  }

  getFirst() {
    if (this.head) {
      return this.head;
    } else return null;
  }

  getLast() {
    if (this.head) {
      let nextNode = this.head;
      while (nextNode) {
        if (!nextNode.next) {
          return nextNode;
        }
        nextNode = nextNode.next;
      }
    } else return null;
  }

  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
    } else {
      let prev = this.head;
      let node = this.head.next;
      while (node.next) {
        prev = node;
        node = node.next;
      }
      prev.next = null;
    }
  }

  insertLast(item) {
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(item);
    } else {
      this.head = new Node(item);
    }
  }
  getAt(index) {
    if (!this.head) return null;
    if (this.head) {
      let count = 0;
      let node = this.head;
      while (node) {
        if (count === index) {
          return node;
        }
        count++;
        node = node.next;
      }
      return null;
    }
  }

  removeAt(index) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(index - 1);
    // let next = this.getAt(index + 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(item, index) {
    if (!this.head) {
      this.head = new Node(item);
      return;
    }
    if (index === 0) {
      this.head = new Node(item, this.head);
      return;
    }
    let count = 0;
    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      if (count === index - 1) {
        prev.next = new Node(item, node);
        return;
      }
      count++;
      prev = node;
      node = node.next;
    }
    node.next = new Node(item);
  }

  // forEach(fn){
  //   if(this.head){
  //     let head = this.head;
  //     let node = this.head.next;
  //   let arr = [head];
  //     while(node.next){

  //     }
  //   }
  // }
}

module.exports = { Node, LinkedList };

// const l = new LinkedList();
// console.log(l.size());
// l.insertFirst(1);
// l.insertFirst(1);
// l.insertFirst(1);
// l.insertFirst(1);
// console.log(l);
// console.log(l.size());
