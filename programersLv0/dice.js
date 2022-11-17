function solution(box, n) {
  var answer = 0;
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}

// 가로 세로 높이 배열 [3], 주사위 길이 n
// Math.floor(box[0] / n)
// 가로, 세로, 높이에 따른 
