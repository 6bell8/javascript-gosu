// pop()배열로 푸는 방법

function solution(num_list) {
  const arr = [];

  while (num_list.length) {
    arr.push(num_list.pop());
  }
  return arr;
}

// num_list에서 원소값을 찾아서 푸는 방법

function solution(num_list) {
  const arr = [];
  let cnt = num_list.length - 1;

  while (cnt >= 0) {
    arr.push(num_list[cnt]);
    cnt--;
  }
  return arr;
}
