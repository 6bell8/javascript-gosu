function solution(sides) {
  let arr = sides.sort((a, b) => a - b);
  return arr[2] >= arr[0] + arr[1] ? 2 : 1;
}

// Math.max[...side]는 0이상의 최대값을 구하는 함수이다.
