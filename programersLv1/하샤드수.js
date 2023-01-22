function solution(x) {
  let plus = x;
  let divi = plus
    .toString()
    .split("")
    .map((a) => Number(a))
    .reduce((a, c) => a + c);
  // ! boolean 변환식 0이면 true, 1이상이면 false 변환
  return !(x % divi);
}
