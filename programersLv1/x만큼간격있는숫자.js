function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (answer.length <= n) {
      answer.push(x * i);
    }
  }
  return answer;
}
