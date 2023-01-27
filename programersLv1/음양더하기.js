// 숫자 1은 true다, 숫자 0부터 음수는 false다 따라서 reduce로 누적 값을 곱해서
// 1 or -1에 따라서 곱하고 더해준다.

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
