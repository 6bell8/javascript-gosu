//내 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .map((a) => Number(a))
    .reduce((a, c) => a + c);
}

//다른 사람풀이
function solution(n) {
  return (
    n
      .toString()
      .split("")
      //reduce 누적값에 parseInt를 붙여서 정수로 바꾼다. parseFloat는 실수 (소수점)그리고 뒤에 0을 붙여주면서 차근차근계산
      .reduce((a, c) => a + parseInt(c), 0)
  );
}
