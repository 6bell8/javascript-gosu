// Front와 Rear가 이어져있는 queue이다 circular queue는 linked list로 구현했을 때의 이점은 딱히 없다.

//Array로 구현

class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = [this.rear + 1] % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  //   front 가장 앞에 있는 값을 알아내는 함수
  peek() {
    return this.queue[this.front];
  }
}

const queue = new Queue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size);
console.log(queue.peek());
console.log(16);
console.log(32);
console.log(queue.isFull());
