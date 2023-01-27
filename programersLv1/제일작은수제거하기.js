function solution(arr) {
  if (arr.length === 1) return [-1];

  // 가장 작은 수 구하는 math함수
  // 값이 같지않으면 인덱스도 같지않다... 확신을 갖고 문제풀이
  return arr.filter((a) => a !== Math.min(...arr));
}
