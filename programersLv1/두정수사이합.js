function solution(a, b) {
  let arr = [];
  if (a === b) return a;

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  if (b < a) {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
  }

  return arr.reduce((a, c) => a + c);
}

// 배열 reduce
