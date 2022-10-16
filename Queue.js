// Queue list의 구조

//first in first out

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // 뒤에서 값을 증가 시키는 식

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  //값을 임의로 설정해두고 앞에 있는 값을 지운다음 1증가 시켜서 식을 종료
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  //가장 앞에 있는 값을 알아내는 함수
  peek() {
    return this.queue[this.front];
  }

  //수의 크기는 rear에 프론트 값을 빼는 것으로 구할 수 있음
  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
