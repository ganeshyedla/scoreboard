// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.arr = [];
  }

  add(item) {
    this.arr.unshift(item);
  }
  remove() {
    // let i = this.arr.indexOf(item);
    // return this.arr.splice(i, 1);
    return this.arr.pop();
  }
}

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.add(3);

// console.log(q, q.remove(1));
module.exports = Queue;
