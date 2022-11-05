function solution(n) {
  let i = 1;
  let arr = [];

  while (i <= n) {
    if (n % i == 0) {
      arr.push(i);
    }
    i++;
  }
  return arr.length;
}

// 순서쌍의 개수를 return 하는 것

// 순서쌍의 수는 약수의 갯수와 동일하다.
// 왜냐하면 약수의 갯수를 처음과 끝에서 곱하면 주어진 매개변수가 되기 때문이다.
