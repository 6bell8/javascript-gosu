function solution(dot) {
  if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  }
  if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  }
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  }
  if (dot[0] > 0 && dot[1] < 0) {
    return 4;
  }
}

// x,y[++] (1)
// x,y[-+] (2)
// x,y[--] (3)
// x,y[+-] (4)

// 1. dot / dot[0] < 0 2, 3로, dot[0] > 0 이면 1,4로
// 1-2. if문 안에서 첫번째 dot[1]이 < 0 면 3, 2번째가 작으면 1
