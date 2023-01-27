// 문자열이지만 배열 변환을 안해도 됐음
function solution(s) {
  if (arr.length % 2 == 1) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (
      arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)]
    );
  }
}

// 삼항연산자 풀이법
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
