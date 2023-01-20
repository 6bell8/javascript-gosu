function solution(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, c) => a + c, 0);
}

// n의 약수 for문 돌려서 나누어 떨어지는 수 arr 에 push
// arr.reduce

//다른 사람풀이
// 배열을 생성 할 필요없이 0값에 i를 더해줌
function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
