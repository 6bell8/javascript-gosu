//Linked Llst를 통한 구현
// 인덱스(Index)로 접근할 수 있기 때문에 접근 속도가 매우 빠르다.

// - 연속된 메모리 공간에 존재하기 때문에 관리하기가 편하다.
// 배열의 크기 >> 데이터 수 : 메모리 공간의 낭비를 가져온다.

// - 배열의 크기 << 데이터 수 : 데이터를 저장할 수 없다.

// ○ 삽입 & 삭제 연산 후에 연속적인 물리 주소를 유지하기 위해 원소들을 이동시키는 추가 작업과 시간이 소요된다.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.siz -= 1;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
