function solution(n) {
  return Math.sqrt(n) === Number(Math.sqrt(n).toFixed(0)) ? 1 : 2;
}

// Number 시켜서 제곱수 리턴, toFixed로 제곱수인지 판별
// isInteger는 정수인지 판별하는 함수
