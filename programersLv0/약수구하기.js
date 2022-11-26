function solution(n) {
  let cnt = 1;
  let gcd = 1;
  let arr = [];

  while (cnt <= n) {
    if (n % gcd === 0) {
      arr.push(gcd);
      gcd++;
      cnt++;
    } else {
      gcd++;
      cnt++;
    }
  }

  return arr;
}

//다른 사람 풀이

//다른 사람풀이

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  return answer;
}

// else 생략하고 for i 조건문으로 변수 최소화
