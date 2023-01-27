function solution(a, b) {
  return a.map((a, i) => a * b[i]).reduce((a, c) => a + c);
}

// 다른사람풀이
// reduce 누적값으로 acc += a[i] * b[i] 계산 후, 인덱스 0부터계산
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
