function solution(c) {
  if (c[1] - c[0] == c[2] - c[1]) {
    return c[c.length - 1] + (c[1] - c[0]);
  } else {
    return c[c.length - 1] * 2;
  }
}

// 등비와 등차의 조건을 따로 구성해서 리턴 값을 줬음.
