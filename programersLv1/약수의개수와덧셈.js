function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    // arr를 scope에 잘 맞춰서 집어 넣으면 arr가 초기화 되기때문에 원하는 배열만 확인 할 수 있다.
    let arr = [];
    for (let cnt = 1; cnt <= i; cnt++) {
      if (i % cnt === 0) {
        arr.push(cnt);
      }
    }
    if (arr.length % 2 === 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }
  return sum;
}
