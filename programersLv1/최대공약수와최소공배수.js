function solution(n, m) {
  let cnt = 1;
  let num1 = 0;
  let num2 = 0;

  for (let i = 1; i <= 100000; i++) {
    if (m % n === 0) {
      num1 = JSON.parse(JSON.stringify(n));
      if ((m * i) % n === 0) {
        num2 = JSON.parse(JSON.stringify(m));
      }
    } else {
      n--;
    }
  }

  return num2;
}

// 최대공약수 구하는 방법은 for문 작성해서 m % n === 0 맞으면 return n,m // else n--

// 최소공배수 구하는 방법은 for문 m * cnt % n === 0 else cnt++
