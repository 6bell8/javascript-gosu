function solution(my_string, letter) {
  let arr = [...my_string];
  const result = arr.filter((str) => str !== letter);
  return result.join("");
}

// 1. 변수를 먼저 배열에 넣어준다.
// 2. filter 함수 활용, my_string에서 letter라는 변수를 빼준다.
// 3. arr.filter(str 라는 변수를 만들어서 => str !== letter 같지않다는 조건을 걸고 배열을 반환)
// 이후 배열을 합쳐준다.
