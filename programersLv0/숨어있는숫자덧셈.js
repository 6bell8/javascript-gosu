function solution(my_string) {
  let arr = my_string
    .split("")
    .filter((f) => !isNaN(f))
    .map(Number);

  return arr.reduce((f, w) => f + w);
}

// isNaN 함수로 배열을 파라미터로 넣어주면서 걸러준다.
// map 반복문으로 숫자로 바꿔 줌
// reduce를 사용해서 배열을 모두 합쳐준다
