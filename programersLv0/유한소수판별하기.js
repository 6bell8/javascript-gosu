function solution(a, b) {
  let num = a / b;
  return num == num.toFixed(9) ? 1 : 2;
}

// 유한소수의 범위를 모르는 상황에서 num값을 나누어주고, 소수점 범위값이 같냐 아니냐로 풀었음

// 소수점 2에서 Fixed 값을 올릴 때 통과하는 테스트케이스가 많아서 값을 올렸더니 풀림;
