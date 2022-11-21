function solution(s) {
  let num = s.split(" ");
  let zIdx = num.findIndex((e) => e === "Z");

  while (num.includes("Z")) {
    num.splice(zIdx - 1, 1);
  }

  return num.map(Number).reduce((a, b) => a + b);
}

// 먼저 배열 split처리
// findindex로 Z 이전의 문자열을 찾은 후
// 반복문을 돌리면서 [zIdx-1], num[zIdx]를 빼준다.
// reduce를 통해서 더하고 리턴해준다.
