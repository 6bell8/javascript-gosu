function solution(s) {
  s.sort((a, b) => a - b);
  let newSide = s[0] + s[1] - 1;
  let minusSide = s[1] - (s[1] - s[0]);
  return newSide - s[1] + minusSide;
}

// 나머지 긴 선분의 합이 작아야 됨
// sort했을 때 가장긴변은 [1] - [0] < ? <= [1]
// sort 먼저 해주고
// [0] + [1] = [2]
// [1] - [0] = ?
// ([2] - [1]) + ?
