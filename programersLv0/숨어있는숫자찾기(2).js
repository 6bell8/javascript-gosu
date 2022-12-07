function solution(my_string) {
  let nums = my_string.match(/\d+/gi);
  // 정규표현식으로 [0-9]+ 이런 식으로도 사용할 수 있다.
  return nums ? nums.map((a) => a * 1).reduce((a, c) => a + c, 0) : 0;
  // nums 문자열에 자연수가 없을 때 판별 식, reduce 인덱스 0부터 시작하는 거 생각하고, 문자열에 자연수가 없으면 0리턴하는 식으로 풀이
}
