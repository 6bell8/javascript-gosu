function solution(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, c) => a + c);
}

// 숫자 각자 나눌 때 꿀팁, toString하고 split한다음 map Number처리하면서 나눠짐.

//tip parseInt는 문자열을 실수(Real Number)로 바꾸는 함수
