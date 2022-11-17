function solution(n) {
  let factorial = (x) => (x != 1 ? x * factorial(x - 1) : 1);
  let cnt = 1;

  for (let i = factorial(cnt); i <= n; i++) {
    if (factorial(cnt) < n) {
      cnt++;
    } else if (factorial(cnt) === n) {
      return cnt;
    } else {
      return cnt - 1;
    }
  }
}

// n이라는 정수가 주어졌을 때 n보다 작은 팩토리얼 값을 구하면 된다.
// fatorial 함수 먼저 만들고, for(let i = fatorial; i <= n; i++)
// cnt의 값을 리턴하면 된다.

//if, if문을 사용하면 위 조건이 참이여도 실행
//반면에 else if을  사용하면 위의 if문이 참이면 else if문은 실행되지않음

// 항상 정수값이 같은 경우의 수도 생각해야한다.
