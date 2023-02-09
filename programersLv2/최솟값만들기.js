function solution(A, B) {
  let sum = 0;
  let cnt = 0;

  let srt1 = A.sort((a, b) => a - b);
  let srt2 = B.sort((a, b) => b - a);
  while (cnt <= A.length - 1) {
    sum += A[cnt] * B[cnt];
    cnt++;
  }

  return sum;
}

// sort로 분류하고, reduce 파라미터 total값에 더하기
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
