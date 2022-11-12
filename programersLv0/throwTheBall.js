function solution(numbers, k) {
  let cnt = 0;
  let order = 2 * (k - 1);

  while (cnt < order) {
    cnt = cnt + 2;
  }

  return numbers[cnt % numbers.length];
}

// 배열의 길이가 홀수냐 짝수냐에 따라 다른 결과가 도출
// whlie 반복문으로 cnt = cnt + 2
// cnt < order 한 이유는 cnt <= order를 하게되면 cnt값이 2더 커져 버리기 때문이다.
// k - 1 하는 이유는 자기 차례를 빼야하기 때문에 -1 [0] 배열이 첫번째 배열이니까 빼줌
