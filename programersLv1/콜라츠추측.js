function solution(num) {
  let cnt = 0;

  while (cnt != 501) {
    if (num === 1) return cnt;
    if (num % 2 == 0) {
      num = num / 2;
      cnt++;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
      cnt++;
    }
  }

  return -1;
}

// 다른사람풀이
// 삼항연산자풀이
function collatz(num) {
  var answer = 0;
  // && 둘중하나가 아닐 떄 까지 조건을 기입
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
